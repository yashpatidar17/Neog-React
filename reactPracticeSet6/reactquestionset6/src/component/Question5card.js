export const Question5card = ({datarec})=>{
    return(
        <div>
<>
                <img src={datarec.src} alt="sample"/>
                <p>{datarec.caption}</p>
                <p>Likes :{datarec.likes}</p>
                <p>Views :{datarec.views}</p>
                </>
        </div>
    )
}