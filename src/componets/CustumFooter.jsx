import { Container } from "react-bootstrap"

export function CustomFooter () {
    return(
        <footer className="bg-dark pb-3">
           <Container>
           <div className=" row mb-3">
               <div className="text-center mt-3 col-4 ">
               
                 <a href="#" className="text-light text-decoration-none">Sponsor</a> </div>

                 <div className="text-center mt-3 col-4">
                 <a href="#" className="text-light text-decoration-none"> Social</a> </div> 
                  
                  
                 <div className="text-center mt-3 col-4">
                 <a href="#" className="text-light text-decoration-none">Contatti</a></div>

               
           </div >
           </Container>
        </footer>
       )
}
