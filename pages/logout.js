import React from "react";
import Link from "next/link";

function Logout() {
  return (
    <div>
      thank you for using out app
      <hr />
      <Link href="/api/auth/login">Login</Link>
    </div>
  );
}

export default Logout;
