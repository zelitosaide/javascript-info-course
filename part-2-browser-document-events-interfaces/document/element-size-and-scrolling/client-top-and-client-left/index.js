// …But to be precise – these properties are not border width/height, but
// rather relative coordinates of the inner side from the outer side.

// What’s the difference?
// It becomes visible when the document is right-to-left (the operating
// system is in Arabic or Hebrew languages). The scrollbar is then not on
// the right, but on the left, and then clientLeft also includes the
// scrollbar width.
