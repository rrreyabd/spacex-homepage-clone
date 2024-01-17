import '../index.css'
import { motion } from "framer-motion"
import Button from './Button'
import Header from './Header'

const Section = ({asset, headerStatus, headerTitle, btnTarget, btnText}) => {
    const assetUrl = `/${asset}`;
    const isVideo = assetUrl.endsWith('.mp4') || assetUrl.endsWith('.webm');

    return (
        <section className={`h-[100dvh] w-full relative`}>
            {isVideo ? (
                <video autoPlay loop muted className="absolute w-full h-full object-cover" src={assetUrl} />
            ) : (
                <div className="absolute w-full h-full" style={{backgroundImage: `url(${assetUrl})`, backgroundSize: 'cover'}} />
            )}
            
            <div className="flex flex-col gap-8 text-white absolute left-32 bottom-32">
                <Header 
                    status={headerStatus}
                    title={headerTitle}
                />
                <Button 
                    target={btnTarget}
                    text={btnText}
                />
            </div>
        </section>
    )
}

export default Section