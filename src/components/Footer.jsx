import React from "react";

function Footer() {
  return (
    <footer className="px-4 md:px-12 lg:px-24 py-4 border-t-2 border-[#51516D]">
      <p>
        &copy; {new Date().getFullYear()}, Ezekiel A. Tobiloba - (ZeekCodes) All
        rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
