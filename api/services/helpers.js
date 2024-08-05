
const homeCleaner = (data, isObj)=>{
    return isObj? cleaner(data, true): data.map((dat)=>cleaner(dat, false))
}

const cleaner = (cont, bl)=>{
     const items  = cont.Items.map((it)=> aux(it, false))
    const info = {
        id:cont.id,
        title:cont.title,
        landing: cont.landing,
        logo:cont.logo,
        infoHeader: cont.info_header,
        infoBody: cont.info_body,
        url: cont.url,
        enable: cont.enable,
    };
    return bl? {info, items} : info
      
    
};
const aux = (info, detailItem,)=>{
    let trunc = detailItem? info.text : truncateText(info.text, 12)
    return {
        id: info.id,
        img: info.img,
        text: trunc,
        pageId: info.PageId,
        enable: info.enable,
    }
};
function holderParser (info, isObj) { 
    return isObj? parser(info) :  info.map((dt)=> parser(dt))
 };
 const parser = (data) => {
    return {
        id: data.id,
        email: data.email,
        nickname: data.nickname,
        givenName: data.given_name,
        image: data.picture,
        role: data.role,
        country: data.country,
        enable: data.enable,
    };
 };
 const truncateText = (text, wordLimit = 10)=>{
    const words = text.split(' ');    // Ejemplo de uso
    if (words.length <= wordLimit) {  //   const text = "Texto de ejemplo";
        return text; }                //   const ejemplo = truncateText(text, 12);
    const truncatedWords = words.slice(0, wordLimit); 
    return truncatedWords.join(' ') + '...'; 
}

export default {
homeCleaner,
aux,
holderParser,

truncateText,

dataEmptyPage :()=> {
    return [{
        id: false,
        title: 'No hay datos aun',
        landing: 'No hay datos aun',
        logo: 'No hay datos aun',
        infoHeader: 'No hay datos aun',
        infoBody: 'No hay datos aun',
        url: 'No hay datos aun',
        enable: false,
    }]
},
};
 

  