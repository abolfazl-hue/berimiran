import { v4 as uuid } from "uuid"
import { DefaultDataType } from "@/types"

const defaultData : DefaultDataType = {
    header: {
        title: "بریم ایران",
        links: [
            {
                name: "صفحه اصلی",
                id: uuid(),
                link : "/"
            },
            {
                name: "درباره ما",
                id: uuid(),
                link : "/about-us"
            },
            {
                name: "انتخاب مقصد",
                id: uuid(),
                link : "/destination-choose"
            },
            {
                name: "سوغاتی",
                id: uuid(),
                link : "/souvenirs"
            }
        ],
        welcome: [
            {
                text: "با بریم ایران سفرتان را به یاد ماندنی کنید",
                button: "مکان های دیدنی استان ها",
                id : uuid(),
                imageLink : "img1"
            },
            {
                text: "قصد سفر به کجا داری ؟",
                button: "انتخاب مقصد سفر",
                id : uuid(),
                imageLink : "img2"
            },
            {
                text: "با بریم ایران سفرتان را به یاد ماندنی کنید",
                button: "به اشتراک گذاشتن تجربیات",
                id : uuid(),
                imageLink : "img3"
            }
        ]
    },
    about: {
        subtitle: "به سایت بریم ایران خوش آمدید",
        title: "وقتش رسیده که ماجراجوییت رو در ایران شروع کنی",
        paragraphs: [
            "بریم ایران به شما کمک می کند تا با جاذبه های گردشگری ایران آشنا شوید . هدف اصلی این سایت کمک به شما عزیزان برای انتخاب مقصد مناسب گردشگری میباشد",
            "همچنین شما می توانید تجربیات خودتان را از سفر به شهر های مختلف در صفحه مخصوص همان شهر با ما به اشتراک بگذارید"
        ],
        button: "درباره ما",
        imageLink : ""
    },
    sections: {
        popular: {
            title : "محبوب ترین استان ها برای سفر"
        },
        contactus: {
            title: "تجربیات سفر خود را با ما به اشتراک بگذارید",
            subtitle: "با ما در ارتباط باشید و ما را همراهی کنید",
            text: "ارتباط با ما",
            imageLink : ""
        },
        recommended: {
            title : "مقاصد گردشگری پیشنهاد شده برای شما"
        },
        services: {
            title: "خدمات سایت بریم ایران",
            info : [
                {
                    title: "بهترین همراه در سفر های شما",
                    icon: "",
                    id: uuid(),
                    text : "ما این اختیار را برای شما فراهم کردیم تا در صورت بهره مندی از این سایت تجربیات سفر خود رو با ما به اشتراک بگذارید تا بتوانیم ایران عزیزمان را بهتر بشناسیم"
                },
                {
                    title: "بهترین راهنمای سفر",
                    icon: "",
                    id: uuid(),
                    text : "بریم ایران به شما کمک می کند در انتخاب مقصد خود بهترین انتخاب رو داشته باشید و همچنین پس از انتخاب مقصد ؛ شما را با تمام جاذبه های گردشگری دیدنی مقصد مورد نظر خود آشنا می کند"
                },
                {
                    title: "نمایش مکان دقیق",
                    icon: "",
                    id: uuid(),
                    text : "بریم ایران برای دسترسی آسان تر شما به جاذبه های گردشگری کشورمان همراه با معرفی هر جاذبه گردشگری لوکیشن مربوط به آن را قرار داده است تا مسیری هموار برای شما عزیزان مهیا کرده باشد"
                }
            ]
        }
    },
    footer: {
        sections: [
            {
                title: "صفحه ها",
                links: [
                    {
                        text: "صفحه اصلی",
                        address: "/",
                        id : uuid()
                    },
                    {
                        text: "دیدنی های شهر های ایران",
                        address: "/destination-choose",
                        id : uuid()
                    },
                    {
                        text: "کجا میخوای بری؟",
                        address: "/destination-choose",
                        id : uuid()
                    },
                    {
                        text: "درباره ما",
                        address: "/about-us",
                        id : uuid()
                    },
                    {
                        text: "سوغاتی",
                        address: "/souvenirs",
                        id : uuid()
                    },
                ],
                id : uuid()
            },
            {
                title: "محبوب ترین استان ها",
                links: [
                    {
                        text: "استان فارس",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان اصفهان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان گیلان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان مازندران",
                        address: "",
                        id : uuid()
                    }
                ],
                id : uuid()
            },
            {
                title: "مقاصد پیشنهادی",
                links: [
                    {
                        text: "استان اردبیل",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان لرستان",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "جزیره کیش",
                        address: "",
                        id : uuid()
                    },
                    {
                        text: "استان زنجان",
                        address: "",
                        id : uuid()
                    }
                ],
                id : uuid()
            }
        ],
        contact: {
            title: "منتظر انتقادات و پیشنهادات شما هستیم",
            social: {
                addresses : [
                    {
                        name : "gmail",
                        text: "abolfazljdst@gmail.com",
                        id: uuid(),
                        icon : "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    },
                    {
                        name : "phone",
                        text: "+98 9101522273",
                        id: uuid(),
                        icon : "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    }
                ],
                icons: [
                    "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
                    "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
                    "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
                ]
            }
        },
        copyright : "تمامی حقوق این وب سایت برای بریم ایران محفوظ است©"
    }
}

export default defaultData