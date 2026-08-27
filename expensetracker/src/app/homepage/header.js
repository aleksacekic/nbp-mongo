"use client"
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [korisnik, setKorisnik] = useState("");
  const menuRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    setKorisnik(localStorage.getItem("korisnik") || "");
  }, []);

  useEffect(() => {
    if (!open) return;

    const handlePointer = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const logOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <header>
      <h1>Expense Tracker</h1>

      <div className="user-menu" ref={menuRef}>
        <button
          type="button"
          className="welcome"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Welcome, {korisnik}
          <span className="reacticon" data-open={open}>
            <IoIosArrowDropdownCircle />
          </span>
        </button>

        {open && (
          <div className="logout" onClick={logOut}>
            Logout
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
