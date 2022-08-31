import { Footer } from "flowbite-react"

export default function Footers() {
    return (
        <>
            <Footer>
                <div className="w-screen">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href='/'
                                src=''
                                alt='SOBO'
                                name='SOBO'
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </>
    )
}