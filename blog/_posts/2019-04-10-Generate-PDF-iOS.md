---
title: Generating a PDF on iOS
date: 2019-04-10
description: How to generate a PDF using UIPrintPageRenderer on iOS.
tags:
  [iOS, swift, UIKit]
---

# Generating a PDF on iOS

Generating a pdf on iOS is surprisingly hard for something that is a common use case. The first way that I generated was to use a graphics context and manually write attributed strings in the position of your choosing. However this isn't very flexible if you want to change any individual piece of data. The second and easier way is to render html and have iOS draw that to the a pdf using a `UIPrintPageRenderer`. I searched around the internet for a long time to find a solution and it took some perserverence and luck, but I found a way to render PDF's without third party libraries.

## The Method

```swift
class PDFRenderer {
  func exportHTMLContentToPDF(HTMLContent: String) -> Data {
    let printPageRenderer = CustomPrintPageRenderer()

    let printFormatter = UIMarkupTextPrintFormatter(markupText: HTMLContent)
    printPageRenderer.addPrintFormatter(printFormatter, startingAtPageAt: 0)

    let pdfData = drawPDFUsingPrintPageRenderer(printPageRenderer)

    return pdfData
  }

  func drawPDFUsingPrintPageRenderer(_ printPageRenderer: UIPrintPageRenderer) -> Data {
    let data = NSMutableData()

    UIGraphicsBeginPDFContextToData(data, .zero, nil)

    for i in 0..<printPageRenderer.numberOfPages {
      UIGraphicsBeginPDFPage()
      printPageRenderer.drawPage(at: i, in: UIGraphicsGetPDFContextBounds())
    }

    UIGraphicsEndPDFContext()

    return data as Data
  }
}
```

That's almost all the code you need to render a pdf. The missing piece from this code is the print page render itself, which we will get to later.

All you need to do is pass in your html content and create a UIMarkupTextPrintFormatter and tell the page renderer that the content that will be drawn is markup.

Next `drawPDFUsingPrintPageRenderer` renders each page and appends it to NSMutableData. While at the beginning I said you could use the same graphics context to draw individual elements, this is done using manual positioning and isn't as flexible. The drawPage function greatly simplifies this effort.

## UIPrintPageRenderer

The UIPrintPageRenderer is the main class that renders the pdf document.

```swift
import UIKit

class CustomPrintPageRenderer: UIPrintPageRenderer {
  let A4PageWidth: CGFloat = 595.2
  let A4PageHeight: CGFloat = 841.8

  override init() {
    super.init()
    self.headerHeight = 40
    self.footerHeight = 50
  }

  override var paperRect: CGRect {
    let pageFrame = CGRect(x: 0.0, y: 0.0, width: A4PageWidth, height: A4PageHeight)
    return pageFrame
  }

  override var printableRect: CGRect {
    let pageFrame = CGRect(x: 0.0, y: 0.0, width: A4PageWidth, height: A4PageHeight)
    let inset = pageFrame.insetBy(dx: 10, dy: 15)
    return CGRect(origin: inset.origin, size: CGSize(width: inset.width, height: inset.height-30))
  }

  override func drawFooterForPage(at pageIndex: Int, in footerRect: CGRect) {
    let footerText = "Page \(pageIndex+1)"

    let font = UIFont.preferredFont(forTextStyle: .body)
    let textSize = getSizeForText(footerText, font: font)

    let centerX = footerRect.size.width/2 - textSize.width/2
    let centerY = footerRect.origin.y + self.footerHeight/2 - textSize.height/2
    let attributes = [
      NSAttributedString.Key.font: font,
      NSAttributedString.Key.foregroundColor: UIColor(red: 205.0/255.0, green: 205.0/255.0, blue: 205.0/255, alpha: 1.0)
    ]

    (footerText as NSString).draw(at: CGPoint(x: centerX, y: centerY), withAttributes: attributes)
  }

  private func getSizeForText(_ text: String, font: UIFont, textAttributes: [NSAttributedString.Key: AnyObject]? = nil) -> CGSize {
    let testLabel = UILabel(frame: CGRect(x: 0, y: 0, width: self.paperRect.size.width, height: footerHeight))

    if let attributes = textAttributes {
      testLabel.attributedText = NSAttributedString(string: text, attributes: attributes)
    } else {
      testLabel.text = text
      testLabel.font = font
    }

    testLabel.sizeToFit()

    return testLabel.frame.size
  }
}
```

To start off we just setup the size of the page itself in pixels. We're just using standard A4 sizing. The `paperRect` variable is definining the page size.

The `drawFooterForPage` function is called whenever a page is done rendering and needs a footer.

The `getSizeForText` function is just figuring out the size of the footer text so that it can be centered.

## Handling the Data

If you just want to give the user the option of how they want to use the pdf you can just retrieve the data present an UIActivityViewController.

```swift
  let data = PDFRenderer().exportHTMLContentToPDF(HTMLContent: "<p>Some content</p>")
  let activityViewController = UIActivityViewController(activityItems: [data], applicationActivities: nil)
  self.present(activityViewController, animated: true, completion: nil)
```

