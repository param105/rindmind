
import {observable,decorate} from 'mobx';

class EduData{
    
        chars = [
            {
                "text": "अ",
                "audio": "1-a"
            },
            {
                "text": "आ",
                "audio": "2-aa"
            },
            {
                "text": "इ",
                "audio": "3-e"
            },
            {
                "text": "ई",
                "audio": "4-ie"
            },
            {
                "text": "उ",
                "audio": "5-u"
            },
            {
                "text": "ऊ",
                "audio": "6-uu"
            },
            {
                "text": "ए",
                "audio": "7-aye"
            },
            {
                "text": "ऐ",
                "audio": "8-aie"
            },
            {
                "text": " अँ",
                "audio": "8.1-aae"
            },
           
            {
                "text": "ओ",
                "audio": "9-oo"
            },
            {
                "text": "औ",
                "audio": "10-au"
            },
            {
                "text": " ऑ ",
                "audio": "10.1-auu"
            },
            {
                "text": "अं",
                "audio": "11-um"
            },
            {
                "text": "अः",
                "audio": "12-aha"
            },
            {
                "text": "क",
                "audio": "13-ka"
            },
            {
                "text": "ख",
                "audio": "14-kh"
            },
            {
                "text": "ग",
                "audio": "15-ga"
            },
            {
                "text": "घ",
                "audio": "16-gh"
            },
            {
                "text": "ङ",
                "audio": "17-anga"
            },
            {
                "text": "च",
                "audio": "18-ch"
            },
            {
                "text": "छ",
                "audio": "19-cha"
            },
            {
                "text": "ज",
                "audio": "20-ja"
            },
            {
                "text": "झ",
                "audio": "21-jha"
            },
            {
                "text": "ञ",
                "audio": "22-tra"
            },
            {
                "text": "ट",
                "audio": "23-ta"
            },
            {
                "text": "ठ",
                "audio": "24-tha"
            },
            {
                "text": "ड",
                "audio": "25-da"
            },
            {
                "text": "ढ",
                "audio": "26-dha"
            },
            {
                "text": "ण",
                "audio": "27-na"
            },
            {
                "text": "त",
                "audio": "28-ta"
            },
            {
                "text": "थ",
                "audio": "29-tha"
            },
            {
                "text": "द",
                "audio": "30-da"
            },
            {
                "text": "ध",
                "audio": "31-dha"
            },
            {
                "text": "न",
                "audio": "32-naa"
            },
            {
                "text": "प",
                "audio": "33-pa"
            },
            {
                "text": "फ",
                "audio": "34-pha"
            },
            {
                "text": "ब",
                "audio": "35-ba"
            },
            {
                "text": "भ",
                "audio": "36-bha"
            },
            {
                "text": "म",
                "audio": "37-ma"
            },
            {
                "text": "य",
                "audio": "38-ya"
            },
            {
                "text": "र",
                "audio": "39-ra"
            },
            {
                "text": "ल",
                "audio": "40-la"
            },
            {
                "text": "व",
                "audio": "41-va"
            },
            {
                "text": "श",
                "audio": "42-sh"
            },
            {
                "text": "ष",
                "audio": "43-sha"
            },
            {
                "text": "स",
                "audio": "44-sa"
            },
            {
                "text": "ह",
                "audio": "45-ha"
            },
            {
                "text": "ळ",
                "audio": "46-alaa"
            },
            {
                "text": "क्ष",
                "audio": "47-ksha"
            },
            {
                "text": "ज्ञ",
                "audio": "48-dnya"
            }
        ]
  
    
}

decorate(EduData,{
    mainChars:observable,

})

const eduDataStore = new EduData()

export default eduDataStore;