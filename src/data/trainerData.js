import HiitIcon from '../assets/HIIT.png'
import BoxingIcon from '../assets/Boxing.png'
import GymIcon from '../assets/Gym.png'
import RunningIcon from '../assets/Running.png'

const trainers = [
    {
        key: "1",
        profileImg: "https://diambra.se/content/uploads/IMG_2974.jpg",
        name: "Pawel Krupa",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "50",
        costTo: "100",
        location: "Stockholm",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.4,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "2",
        profileImg: "https://images.squarespace-cdn.com/content/v1/57d6f49bc534a50658082759/1502998599718-B8WHN221J5241WFEJYWQ/ke17ZwdGBToddI8pDm48kDsmujvCxGgFgBWj31Y2d6R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmbLecD_NwfjqNxjfNDWHyATeL23bceyBtuX4nDs5VF5LtFSR0qFcA7plit5Vqms8/Tommy_5385.jpg?format=1500w",
        name: "Tommy Ludvigsson",
        durationFrom: "50",
        durationTo: "90",
        costFrom: "80",
        costTo: "120",
        location: "Remote",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '76',
        overallRating: 5.0,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "3",
        profileImg: "https://media.bonnierforlagen.se/forfattarfotonstandard/g/44089g.jpg?timestamp=20160307042529",
        name: "Sofia Ståhl",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "50",
        costTo: "100",
        location: "Bergen",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Wednesday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Gym", icon: GymIcon}],
        numberOfReviews: '90',
        overallRating: 4.3,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "4",
        profileImg: "http://jariketola.se/wp-content/themes/jariketola/includes/images/coach_jari_ketola.png",
        name: "Jari Ketola",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "40",
        costTo: "90",
        location: "Uppsala",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Wednesday", "Thursday", "Friday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 3.1,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "5",
        profileImg: "https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/57isz9bufbdssfl5nialw.jpg",
        name: "Magnus Samuelsson",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "300",
        costTo: "600",
        location: "Södertälje",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Thursday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.2,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "6",
        profileImg: "https://diambra.se/content/uploads/IMG_2974.jpg",
        name: "Pawel Krupa",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "50",
        costTo: "100",
        location: "Remote",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.8,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "7",
        profileImg: "https://images.squarespace-cdn.com/content/v1/57d6f49bc534a50658082759/1502998599718-B8WHN221J5241WFEJYWQ/ke17ZwdGBToddI8pDm48kDsmujvCxGgFgBWj31Y2d6R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmbLecD_NwfjqNxjfNDWHyATeL23bceyBtuX4nDs5VF5LtFSR0qFcA7plit5Vqms8/Tommy_5385.jpg?format=1500w",
        name: "Tommy Ludvigsson",
        durationFrom: "50",
        durationTo: "90",
        costFrom: "80",
        costTo: "120",
        location: "Remote",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}],
        numberOfReviews: '3',
        overallRating: 4.8,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "8",
        profileImg: "https://media.bonnierforlagen.se/forfattarfotonstandard/g/44089g.jpg?timestamp=20160307042529",
        name: "Sofia Ståhl",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "50",
        costTo: "100",
        location: "Stockholm",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Wednesday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.7,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "9",
        profileImg: "http://jariketola.se/wp-content/themes/jariketola/includes/images/coach_jari_ketola.png",
        name: "Jari Ketola",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "40",
        costTo: "90",
        location: "Sollentuna",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Wednesday", "Thursday", "Friday"],
        typeOfTraining: [{name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.2,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
    {
        key: "10",
        profileImg: "https://resources.mynewsdesk.com/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto,w_864/57isz9bufbdssfl5nialw.jpg",
        name: "Magnus Samuelsson",
        durationFrom: "30",
        durationTo: "60",
        costFrom: "300",
        costTo: "600",
        location: "Karlskrona",
        address: "Brunnsgatan 5, 111 38 Stockholm, Sweden",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        weekdaysAvailable: ["Monday", "Tuesday", "Thursday"],
        typeOfTraining: [{name: "HIIT", icon: HiitIcon}, {name: "Running", icon: RunningIcon}, {name: "Gym", icon: GymIcon}, {name: "Boxing", icon: BoxingIcon}],
        numberOfReviews: '99+',
        overallRating: 4.5,
        reviews: [
            {
                date: "2020-03-02",
                user: "Benjamin Franklin",
                review: "5",
                reviewText: "This PT gave me a good workout, I will definetly come back!"
            },
            {
                date: "2020-02-29",
                user: "Thomas Trump",
                review: "4",
                reviewText: "Haven't been able to walk for a week, this PT gave me a real leg day."
            },
            {
                date: "2020-02-21",
                user: "Frank the Tank",
                review: "5",
                reviewText: "I will definetly come back, it was a great workout."
            }
        ]
    },
]

export default trainers