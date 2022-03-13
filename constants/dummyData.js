const categories = [
    {
        id: 0,
        title: "Math",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "Natural Science",
        thumbnail: require("../assets/images/bg_2.png")
    },
    {
        id: 2,
        title: "Social Science",
        thumbnail: require("../assets/images/bg_3.png")
    },
    {
        id: 3,
        title: "Indenesian",
        thumbnail: require("../assets/images/bg_4.png")
    },
    {
        id: 4,
        title: "English",
        thumbnail: require("../assets/images/bg_5.png")
    },
    {
        id: 5,
        title: "Coding",
        thumbnail: require("../assets/images/bg_6.png")
    }
]

const courses_list_1 = [
    {
        id: 0,
        title: "Corona Virus",
        duration: "2h 30m",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "Hukum Newton dan Aplikasinya",
        duration: "1h 30m",
        thumbnail: require("../assets/images/thumbnail_2.png")
    }
]

const courses_list_2 = [
    {
        id: 0,
        title: "Corona Virus",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "Hukum Newton dan Aplikasinya",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_2.png")
    },
    {
        id: 2,
        title: "Sejarah Indonesia",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_3.png")
    },
    {
        id: 3,
        title: "Kosa Kata 1",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 4,
        title: "Kosa Kata 2",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 5,
        title: "Kosa Kata 3",
        duration: "2h 30m",
        instructor: "Ricko Caesar Putra",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    }
]

const top_searches = [
    {
        id: 0,
        label: "Corona Virus"
    },
    {
        id: 1,
        label: "Fast tracking"
    },
    {
        id: 2,
        label: "Newton Law"
    },
    {
        id: 3,
        label: "English pharse"
    },
    {
        id: 4,
        label: "Disaster"
    },
    {
        id: 5,
        label: "Nature Law"
    },
]

const course_details = {
    id: 0,
    title: "Corona Virus",
    number_of_students: "33.5k Students",
    duration: "2h 30m",
    instructor: {
        name: "Ricko Caesar Putra",
        title: "Telkomsel Researcher"
    },
    videos: [
        {
            title: "1. Introduction",
            duration: "1:37",
            size: "10 MB",
            progress: "100%",
            is_playing: false,
            is_complete: true,
            is_lock: false,
            is_downloaded: false,
        },
        {
            title: "2. Corona Virus Topology",
            duration: "1:15:00",
            size: "200 MB",
            progress: "100%",
            is_playing: true,
            is_complete: false,
            is_lock: false,
            is_downloaded: true,
        },
        {
            title: "3. How to stop corona virus",
            duration: "1:27:00",
            size: "230 MB",
            progress: "0%",
            is_playing: false,
            is_complete: false,
            is_lock: true,
            is_downloaded: false,
        }
    ],
    students: [
        {
            id: 0,
            name: "Student 1",
            thumbnail: require("../assets/images/student_1.png")
        },
        {
            id: 1,
            name: "Student 2",
            thumbnail: require("../assets/images/student_2.png")
        },
        {
            id: 2,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        },
        {
            id: 3,
            name: "Student 3",
            thumbnail: require("../assets/images/student_3.png")
        }
    ],
    files: [
        {
            id: 0,
            name: "Corona virus structure",
            author: "Shared by Ricko Caesar Putra",
            upload_date: "13th Mar 2022",
            thumbnail: require("../assets/images/pdf.png")
        },
        {
            id: 1,
            name: "Corona virus spreading",
            author: "Shared by Ricko Caesar Putra",
            upload_date: "13th Mar 2022",
            thumbnail: require("../assets/images/doc.png")
        },
        {
            id: 2,
            name: "Other File",
            author: "Shared by Ricko Caesar Putra",
            upload_date: "13th Mar 2022",
            thumbnail: require("../assets/images/sketch.png")
        }
    ],
    discussions: [
        {
            id: 0,
            profile: require("../assets/images/profile.png"),
            name: "Ricko Caesar Putra",
            no_of_comments: "11 comments",
            no_of_likes: "72 likes",
            posted_on: "5 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "Student 1",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/student_2.png"),
                    name: "Student 2",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_3.png"),
                    name: "Student 3",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 3,
                    profile: require("../assets/images/student_1.png"),
                    name: "Student 1",
                    posted_on: "4 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        },
        {
            id: 1,
            profile: require("../assets/images/profile.png"),
            name: "Ricko Caesar Putra",
            no_of_comments: "21 comments",
            no_of_likes: "372 likes",
            posted_on: "14 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            replies: [
                {
                    id: 0,
                    profile: require("../assets/images/student_1.png"),
                    name: "Student 1",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 1,
                    profile: require("../assets/images/profile.png"),
                    name: "Ricko Caesar Putra",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
                {
                    id: 2,
                    profile: require("../assets/images/student_1.png"),
                    name: "Student 1",
                    posted_on: "7 days ago",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                },
            ]
        }
    ]
}

const notificationByDays = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "2h 47m ago",
                message: "Asked to join online courses regarding professional web designing."
            },
            {
                id: 2,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "3h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
            {
                id: 3,
                avatar: require("../assets/images/student_3.png"),
                name: "Lilian Ellis",
                created_at: "4h 32m ago",
                message: "Asked assiged you to watch professional videography course."
            }
        ],

    },
    {
        title: "Yesterday",
        data: [
            {
                id: 4,
                avatar: require("../assets/images/student_1.png"),
                name: "Admin",
                created_at: "16h 47m ago",
                message: "You just signed in from another device check inbox for more details."
            },
            {
                id: 5,
                avatar: require("../assets/images/student_2.png"),
                name: "Customer Care",
                created_at: "20h 02m ago",
                message: "Your 50% discount code is: ON50DIS. Apply on checkout."
            },
        ],

    },
]

const sample_video_url = "https://www.cdc.gov/coronavirus/2019-ncov/videos/COVID-19-School-based-testing/CDC-School-Covid-19-Testing.mp4"

const membershipPans = [
    {
        id: 1,
        price: 99,
        perDuration: "Month",
        description: "Get 7 days free trial",
        withBestOffer: true,
    },
    {
        id: 2,
        price: 39,
        perDuration: "3months",
        description: "$13/month Billed quarterly",
        withBestOffer: false,
    },
    {
        id: 3,
        price: 68,
        perDuration: "6months",
        description: "$11.33/month Billed half-yearly",
        withBestOffer: false,
    },
    {
        id: 4,
        price: 115,
        perDuration: "Year",
        description: "Pay once and don't worry for a year",
        withBestOffer: false,
    },
]

const instructorProfile = {
    id: 1,
    name: "Ricko Caesar Putra",
    title: "Telkomsel Researcher",
    avatar: require("../assets/images/profile.png"),
    isVerified: true,

    aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    
    stats:[
        {
            id: 1,
            title: "Followers",
            value: "8.8M",
            color: '#FCF3D7',
            borderColor: '#F4E9C8',
        },
        {
            id: 2,
            title: "Reviews",
            value: "1.8k",
            color: '#FFE0DE',
            borderColor: '#F9D2D1',
        },
        {
            id: 3,
            title: "Total Students",
            value: "180M",
            color: '#D7DFFF',
            borderColor: '#D3D8FC',
        },
    ],
    courses: [
        {
            id: 0,
            title: "Corona Virus",
            duration: "2h 30m",
            instructor: "Ricko Caesar Putra",
            ratings: 4.9,
            price: 75,
            thumbnail: require("../assets/images/thumbnail_1.png")
        },
        {
            id: 1,
            title: "Hukum Newton",
            duration: "2h 30m",
            instructor: "Ricko Caesar Putra",
            ratings: 4.9,
            price: 75,
            thumbnail: require("../assets/images/thumbnail_2.png")
        },
        {
            id: 2,
            title: "Sejarah Indonesia",
            duration: "2h 30m",
            instructor: "Ricko Caesar Putra",
            ratings: 4.9,
            price: 75,
            thumbnail: require("../assets/images/thumbnail_3.png")
        },
        {
            id: 3,
            title: "Kosa Kata",
            duration: "2h 30m",
            instructor: "Ricko Caesar Putra",
            ratings: 4.9,
            price: 75,
            thumbnail: require("../assets/images/thumbnail_4.png")
        },
            
    ],
    ratings: [
        {
            id: 1,
            description: "Very Satisfied",
            count: 587,
            icon: require("../assets/icons/very_satisfied.png"),
            color: "#FBB344",
        },
        {
            id: 2,
            description: "Satisfied",
            count: 327,
            icon: require("../assets/icons/satisfied.png"),
            color: "#5C97CC",
            
        },
        {
            id: 3,
            description: "Neutral",
            count: 200,
            icon: require("../assets/icons/neutral.png"),
            color: "#9E61C9",
        },
        {
            id: 4,
            description: "Poor",
            count: 44,
            icon: require("../assets/icons/poor.png"),
            color: "#D86041",
        },

    ],
    reviews: [
        {
            id: 1,
            profile: require("../assets/images/student_1.png"),
            name: "John Wick",
            posted_on: "2 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: 2,
            profile: require("../assets/images/student_2.png"),
            name: "Harry Potter",
            posted_on: "7 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            id: 3,
            profile: require("../assets/images/student_3.png"),
            name: "Lilian Ellis",
            posted_on: "10 days ago",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },  
    ],
    socialMedias: [
        {
            id: 1,
            name: "Twitter",
            icon: require("../assets/icons/twitter.png"),
            url: ""
        },
        {
            id: 2,
            name: "Linkedin",
            icon: require("../assets/icons/linkedin.png"),
            url: ""
        },
        {
            id: 3,
            name: "Facebook",
            icon: require("../assets/icons/facebook.png"),
            url: ""
        },
        {
            id: 4,
            name: "Google",
            icon: require("../assets/icons/google.png"),
            url: ""
        },
    ]
}

export default {
    categories,
    courses_list_1,
    courses_list_2,
    top_searches,
    course_details,
    notificationByDays,
    sample_video_url,
    membershipPans,
    instructorProfile,
}