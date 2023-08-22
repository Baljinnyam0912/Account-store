import Container from "./Container";





const About = () => {
    return(
        <div className="w-full h-screen bg-no-repeat bg-cover bg-[url('https://scontent.fuln6-2.fna.fbcdn.net/v/t1.15752-9/367495119_2022157074821212_7106446211805851537_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=t4l2mcsUNhMAX9IPfqf&_nc_ht=scontent.fuln6-2.fna&oh=03_AdS0GzZGbJ0EOlOcztH6Erwq4VRc8iJa2NqtLkglnSbBlQ&oe=65081879')]">
        <Container>
          <div className="w-full h-screen bg-none flex flex-row">
            <div className="w-[50%] h-screen bg-none flex items-center justify-center">
              <img src="https://i.postimg.cc/Y0MswC09/5656.png"></img>
            </div>
  
  
            <div className="w-[50%] h-screen bg-none flex-col flex ">
              <h1 className="font-bold text-white mt-[25%] text-6xl ml-5">Бидний тухай</h1>
              {/* Хэрхэн худалдан авах вэ ? */}
              <h3 className="text-[#d3d3d3] mt-[5%] text-xl text-4xl ml-5">Бид таны аюулгүй байдалаар аккаунт авах зарах гэх мэт олон олон 
              үйлчилгээнүүдийг санал болгон мөн олон улсын гифткарт түргэн шуурхай авах олон давуу тал цаг хугацаан хэмхэн үйлчилгээнүүд санал болгож байгаа билээ </h3>
              {/* <h3 className="text-[#d3d3d3] mt-[5%] text-xl ml-5">Хэрхэн аккоунт зарах вэ ?  Та хувийн мэдээлэлээ үнэн зөв бөглөж
               баталгаажуулсанаар зарах боломжтой юм... Мөн та зарах аккоунтны мэдээлэл буюу (BIND) хаягийг тэр цэсэнд, орж 
               админтай шууд чат болон утсаар ярьж харилцаснаар мэдээлэлийг аюулгүй дамжуулах боломжтой юм</h3> */}
              {/* Та мэдээлэлээ зөв бөгөлсөн бол таны худалдан авах болон зарах авах эрх нээгдэх юм... */}
              {/* <button className="w-[200px] h-[50px] mt-[5%] border-black rounded-tr-lg rounded-bl-lg bg-yellow-500 text-white ml-5">Танилцуулга</button> */}
            </div>
          </div>
  
        </Container>
      </div>
    )
}
export default About;