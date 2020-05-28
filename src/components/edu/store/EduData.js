
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

        words = [
            {
                "text": "अमर",
                "audio": "1-a"
            },
            {
                "text": "कमळ",
                "audio": "2-aa"
            },
            {
                "text": "गगन",
                "audio": "3-e"
            },
            {
                "text": "घर",
                "audio": "4-ie"
            },
            {
                "text": "चमचा",
                "audio": "5-u"
            },
            {
                "text": "छडी",
                "audio": "6-uu"
            },
            {
                "text": "झगा",
                "audio": "7-aye"
            },
            {
                "text": "तवा",
                "audio": "8-aie"
            },
            {
                "text": " थवा",
                "audio": "8.1-aae"
            },
           
            {
                "text": "दम",
                "audio": "9-oo"
            },
            {
                "text": "धर",
                "audio": "10-au"
            },
            {
                "text": " परम ",
                "audio": "10.1-auu"
            },
            {
                "text": "फना",
                "audio": "11-um"
            },
            {
                "text": "बबन",
                "audio": "12-aha"
            },
            {
                "text": "भारत",
                "audio": "13-ka"
            },
            {
                "text": "मगर",
                "audio": "14-kh"
            },
            {
                "text": "यम",
                "audio": "15-ga"
            },
            {
                "text": "रवी",
                "audio": "16-gh"
            },
            {
                "text": "लाव",
                "audio": "17-anga"
            },
            {
                "text": "वारा",
                "audio": "18-ch"
            },
            {
                "text": "शरण",
                "audio": "19-cha"
            },
            {
                "text": "ससा",
                "audio": "20-ja"
            },
            {
                "text": "हरीण",
                "audio": "21-jha"
            },
            {
                "text": "क्षमा",
                "audio": "22-tra"
            },
            {
                "text": "ज्ञान",
                "audio": "23-ta"
            },
           
        ]

        numbers =[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000]

        maths = [
            {
                "text": "0 + 0 = 0",
                "audio": "1-a"
            },
            {
                "text": "1 + 1 = 2",
                "audio": "1-a"
            },
            {
                "text": "2 + 2 = 4",
                "audio": "2-aa"
            },
            {
                "text": "3 + 3 = 6",
                "audio": "3-e"
            },
            {
                "text": "4 + 4 = 8",
                "audio": "4-ie"
            },
            {
                "text": "5 + 5 = 10",
                "audio": "5-u"
            },
            {
                "text": "6 + 6 = 12",
                "audio": "6-uu"
            },
            {
                "text": "7 + 7 = 14",
                "audio": "7-aye"
            },
            {
                "text": "8 + 8 = 16",
                "audio": "8-aie"
            },
            {
                "text": " 9 + 9 = 18",
                "audio": "8.1-aae"
            },
           
            {
                "text": "10 + 10 = 20",
                "audio": "9-oo"
            },
            {
                "text": "00 + 00 = 00",
                "audio": "1-a"
            },
            {
                "text": "10 + 10 = 20",
                "audio": "1-a"
            },
            {
                "text": "20 + 20 = 40",
                "audio": "2-aa"
            },
            {
                "text": "30 + 30 = 60",
                "audio": "3-e"
            },
            {
                "text": "40 + 40 = 80",
                "audio": "4-ie"
            },
            {
                "text": "50 + 50 = 100",
                "audio": "5-u"
            },
            {
                "text": "60 + 60 = 120",
                "audio": "6-uu"
            },
            {
                "text": "70 + 70 = 140",
                "audio": "7-aye"
            },
            {
                "text": "80 + 80 = 160",
                "audio": "8-aie"
            },
            {
                "text": " 90 + 90 = 180",
                "audio": "8.1-aae"
            },
           
            {
                "text": "100 + 100 = 200",
                "audio": "9-oo"
            },
          
           
        ]
  
    
}

decorate(EduData,{
    mainChars:observable,

})

const eduDataStore = new EduData()

export default eduDataStore;