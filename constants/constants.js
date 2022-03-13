const register_options = [
    {
        id: 0,
        label: "STUDENT"
    },
    {
        id: 1,
        label: "TUTOR"
    }
]

const walkthrough = [
    {
        id: 0,
        title: "Education for Everyone",
        sub_title: "Best quality education for everyone, anytime and anywhere",
        image: require("../assets/images/everyone.png")
    },
    {
        id: 1,
        title: "Contribution Reward",
        sub_title: "Get reward for your effort",
        image: require("../assets/images/contribute.png")
    },
    {
        id: 2,
        title: "Blockchain",
        sub_title: "Get blockchain benefit in education system",
        image: require("../assets/images/work.png")
    },
]

const categories = [
    {
        id: 0,
        label: "7 SMP",
        icon: require("../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "8 SMP ",
        icon: require("../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "9 SMP" ,
        icon: require("../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "10 SMA",
        icon: require("../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "11 SMA",
        icon: require("../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "12 SMA",
        icon: require("../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Certification",
        icon: require("../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Training",
        icon: require("../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "generic",
        icon: require("../assets/icons/coding.png")
    },
]

const screens = {
    home: "Home",
    search: "Search",
    profile: "Profile"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "All",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Staff Pick",
        icon: require("../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "SMP"
    },
    {
        id: 1,
        label: "SMA-SMK"
    },
    {
        id: 2,
        label: "Collage"
    },
    {
        id: 3,
        label: "Generic"
    }
]

const created_within = [
    {
        id: 0,
        label: "All Time"
    },
    {
        id: 1,
        label: "This Month"
    },
    {
        id: 2,
        label: "This Week"
    },
    {
        id: 3,
        label: "This Day"
    },
    {
        id: 4,
        label: "2 Months"
    },
    {
        id: 5,
        label: "4 Months"
    }
]

const course_details_tabs = [
    {
        id: 0,
        label: "Chapters",
    },
    {
        id: 1,
        label: "Files",
    },
    {
        id: 2,
        label: "Discussions",
    }
]

export default {
    register_options,
    walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within,
    course_details_tabs
}