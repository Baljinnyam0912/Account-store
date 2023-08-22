import Container from "./Container";


const AboutT = () => {
    return (
        <>
        <div className="w-full h-screen bg-no-repeat bg-cover flex flex-col bg-[url('https://i.postimg.cc/KYt8FZj7/back4.png')]" >
         <Container>
            <div className="w-full h-screen bg-green-none flex flex-row">
                <div className="w-[50%] h-screen bg-none flex items-center justify-center">
                    <img src="https://i.postimg.cc/GpKJ2jTp/vla.png"></img>
                </div>

                <div className="w-[50%] h-screen bg-none flex-col flex">
                    <h1 className="font-bold text-white text-5xl mt-[20%] ml-5"> Хэрхэн ?</h1>
                    <h3 className="text-[#d3d3d3] mt-[5%] text-xl ml-5">
                        Хэрхэн аккоунт худалдан авах вэ ? Та мэдээлэлээ үнэн зөв бөглөж баталгаажуулсанаар таны эрх нээгдэх юм...
                        Та тухайн худалдан авах гэж буй аккоунтны (ID) үнэн зөв гүйлгээний утга нь дээр бичиж гүйлгээ хийснээр
                        таны бүртгэлтэй (Е-майл ) болон (Дугаар) луу автоматаар илгээгдэх болно
                    </h3>
                    <h3 className="text-[#d3d3d3] mt-[5%] text-xl ml-5">
                        Хэрхэн аккоунт зарах вэ ? Та хувийн мэдээлэлээ үнэн зөв бөглөж баталгаажуулсанаар зарах боломжтой юм...
                        Мөн та зарах аккоунтны мэдээлэл буюу (BIND) хаягийг тэр цэсэнд, орж админтай шууд чат болон утсаар ярьж харилцаснаар
                        мэдээлэлийг аюулгүй дамжуулах боломжтой юм

                    </h3>
                </div>
            </div>



         </Container>
        </div>
        
        </>
    )


}

export default AboutT;
