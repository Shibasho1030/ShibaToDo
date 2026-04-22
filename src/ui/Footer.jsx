function Footer() {
  return (
    <footer className="border-t border-[#9DB2BF]/40 bg-[#DDE6ED] py-4 text-center text-sm text-[#526D82] max-h-13">
      &copy;{new Date().getFullYear()} Shohei Shiba — Built with
      <strong> React</strong> & <strong>Redux Toolkit</strong> &
      <strong> Tailwind CSS</strong>
    </footer>
  );
}

export default Footer;
