import HiitIcon from '../assets/HIIT.png'
import BoxingIcon from '../assets/Boxing.png'
import GymIcon from '../assets/Gym.png'
import RunningIcon from '../assets/Running.png'

import pawel from '../assets/trainerImages/pawel.jpg'
import tommy from '../assets/trainerImages/tommy.jpg'
import sofia from '../assets/trainerImages/sofia.jpg'
import jari from '../assets/trainerImages/jari.jpg'
import magnus from '../assets/trainerImages/magnus.jpg'

const trainers = [
    {
        key: "1",
        profileImg: pawel,
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
            },
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
            },
        ]
    },
    {
        key: "2",
        profileImg: tommy,
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
            },
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
            },
        ]
    },
    {
        key: "3",
        profileImg: sofia,
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
            },
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
            },
        ]
    },
    {
        key: "4",
        profileImg: jari,
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
            },
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
            },
        ]
    },
    {
        key: "5",
        profileImg: magnus,
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
            },
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
            },
        ]
    },
    {
        key: "6",
        profileImg: pawel,
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
            },
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
            },
        ]
    },
    {
        key: "7",
        profileImg: tommy,
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
            },
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
            },
        ]
    },
    {
        key: "8",
        profileImg: sofia,
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
            },
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
            },
        ]
    },
    {
        key: "9",
        profileImg: jari,
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
            },
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
            },
        ]
    },
    {
        key: "10",
        profileImg: magnus,
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
            },
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
            },
        ]
    },
]

export default trainers