# Node.js HTTP Response Encoding Issue

This repository demonstrates a common but easily overlooked issue in Node.js HTTP servers: omitting the charset in the `Content-Type` header.  This can lead to unexpected behavior in client browsers, particularly when dealing with non-ASCII characters.

## The Problem

The provided `bug.js` file shows a simple HTTP server.  Notice that the `Content-Type` header only specifies `text/html`.  Without specifying the character set (e.g., `charset=utf-8`), the browser may make incorrect assumptions about the encoding, leading to garbled or incorrect output.

## The Solution

The `bugSolution.js` file demonstrates the correct way to set the `Content-Type` header, including the charset. This ensures consistent and correct rendering across different browsers and character encodings.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using Node.js: `node bug.js`
3. Open your browser and navigate to `http://localhost:3000`.  You might notice encoding problems if your browser makes the wrong assumptions.
4. Run `bugSolution.js` using Node.js: `node bugSolution.js`
5. Open your browser and navigate to `http://localhost:3000`.  You should see the text correctly rendered.
