import { FAQCategory } from "./models/faq.model";

const FAQS: FAQCategory[] = [
  { id: "all", name: "All", faqs: [] },
  {
    id: "account-management",
    name: "Account Management",
    faqs: [
      {
        id: "3",
        question: "How do I delete my account?",
        answer:
          "You can delete your account by going to the settings screen, click on 'Accounts' and tapping on the 'Delete Account' button.",
      },
      {
        id: "7",
        question: "How do I update my account information?",
        answer:
          "You can update your account information by going to the settings screen, tapping on 'Accounts' and tapping on the 'Update Account Information' button.",
      },
      {
        id: "12",
        question: "How do I change my account settings?",
        answer:
          "You can change your account settings by going to the settings screen, tapping on 'Accounts' and tapping on the 'Change Account Settings' button.",
      },
    ],
  },
  {
    id: "personal-information-updates",
    name: "Personal Information Updates",
    faqs: [
      {
        id: "1",
        question: "How do I change my password?",
        answer:
          "You can change your password by going to the settings screen, tapping on 'Accounts' and tapping on the 'Change Password' button.",
      },
      {
        id: "2",
        question: "How do I update my email address?",
        answer:
          "You can update your email address by going to the settings screen, tapping on 'Accounts' and tapping on the 'Update Email' button.",
      },
      {
        id: "13",
        question: "How do I update my profile information?",
        answer:
          "You can update your profile information by going to the settings screen, tapping on 'Accounts' and tapping on the 'Update Profile Information' button.",
      },
      {
        id: "4",
        question: "How do I change my profile picture?",
        answer:
          "You can change your profile picture by going to the settings screen, tapping on 'Accounts' and tapping on the 'Change Profile Picture' button.",
      },
    ],
  },
  {
    id: "mental-health",
    name: "Mental Health",
    faqs: [
      {
        id: "14",
        question: "What are the signs of stress in students?",
        answer:
          "Signs include changes in eating or sleeping habits, irritability, and difficulty concentrating.",
      },
      {
        id: "15",
        question: "What are effective ways for students to deal with anxiety?",
        answer:
          "Methods include practicing mindfulness, engaging in physical activity, and seeking professional help if necessary.",
      },
      {
        id: "16",
        question:
          "What mental health resources are typically available for students?",
        answer:
          "Resources can include counseling services, peer support groups, and mental health workshops.",
      },
    ],
  },
  {
    id: "academic-management",
    name: "Academic Management",
    faqs: [
      {
        id: "17",
        question: "How can students manage academic pressure?",
        answer:
          "Strategies include organizing time effectively, setting realistic goals, and taking regular breaks.",
      },
    ],
  },
  {
    id: "physical-health",
    name: "Physical Health",
    faqs: [
      {
        id: "18",
        question: "What role does nutrition play in student well-being?",
        answer:
          "A balanced diet provides essential nutrients for brain function, concentration, and energy.",
      },
      {
        id: "19",
        question: "How important is sleep for students?",
        answer:
          "Adequate sleep is crucial for memory, learning, mood, and cognitive functions.",
      },
    ],
  },
  {
    id: "social-well-being",
    name: "Social Well-being",
    faqs: [
      {
        id: "20",
        question:
          "How can students maintain a healthy social life while focusing on studies?",
        answer:
          "Balancing social activities with study time and engaging in quality interactions can help.",
      },
    ],
  },
  {
    id: "parental-support",
    name: "Parental Support",
    faqs: [
      {
        id: "21",
        question:
          "How can parents support their children’s well-being during school?",
        answer:
          "Parents can support by maintaining open communication, encouraging healthy habits, and monitoring stress levels.",
      },
    ],
  },
];

export { FAQS };
