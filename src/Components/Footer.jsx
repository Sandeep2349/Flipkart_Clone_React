export const Footer = () => {
  return (
    // <footer className="bg-dark text-white text-center p-3 mt-5">
    //   <p className="mb-0">© Sandeep Kumar MyApp</p>
    // </footer>
    <footer className="py-3 my-4">
       <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">Home</a></li> 
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li> 
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li> 
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li> 
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li> </ul> 
          <p className="text-center text-body-secondary">© 2025 Company, Inc</p> 
    </footer>
  );
};