const ntpcQuestions = [

    // =====================================================
    // RRB NTPC - MATHEMATICS
    // =====================================================

    {
        id: "NTPC-MATH-001",
        exam: "RRB NTPC",
        subject: "Mathematics",
        chapter: "Percentage",
        question: "A number is increased by 20% and then decreased by 20%. What is the net percentage change?",
        options: [
            "No change",
            "4% increase",
            "4% decrease",
            "2% decrease"
        ],
        answer: 2,
        explanation: "Let the number be 100. After a 20% increase, it becomes 120. A 20% decrease on 120 gives 96. Therefore, the net change is a 4% decrease.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-MATH-002",
        exam: "RRB NTPC",
        subject: "Mathematics",
        chapter: "Profit and Loss",
        question: "A shopkeeper buys an article for ₹800 and sells it for ₹920. What is his profit percentage?",
        options: [
            "12%",
            "15%",
            "18%",
            "20%"
        ],
        answer: 1,
        explanation: "Profit = ₹920 − ₹800 = ₹120. Profit percentage = (120/800) × 100 = 15%.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-MATH-003",
        exam: "RRB NTPC",
        subject: "Mathematics",
        chapter: "Time and Work",
        question: "A can complete a work in 12 days and B can complete the same work in 18 days. In how many days can they complete the work together?",
        options: [
            "6 days",
            "7.2 days",
            "8 days",
            "9 days"
        ],
        answer: 1,
        explanation: "A's one-day work = 1/12 and B's one-day work = 1/18. Their combined one-day work = 1/12 + 1/18 = 5/36. Therefore, time required = 36/5 = 7.2 days.",
        difficulty: "Medium"
    },

    {
        id: "NTPC-MATH-004",
        exam: "RRB NTPC",
        subject: "Mathematics",
        chapter: "Ratio",
        question: "The ratio of two numbers is 3:5 and their sum is 64. What is the smaller number?",
        options: [
            "20",
            "24",
            "30",
            "40"
        ],
        answer: 1,
        explanation: "Total parts = 3 + 5 = 8. One part = 64/8 = 8. Smaller number = 3 × 8 = 24.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-MATH-005",
        exam: "RRB NTPC",
        subject: "Mathematics",
        chapter: "Simple Interest",
        question: "What is the simple interest on ₹5,000 at 8% per annum for 2 years?",
        options: [
            "₹600",
            "₹700",
            "₹800",
            "₹900"
        ],
        answer: 2,
        explanation: "Simple Interest = (Principal × Rate × Time)/100 = (5000 × 8 × 2)/100 = ₹800.",
        difficulty: "Easy"
    },


    // =====================================================
    // RRB NTPC - REASONING
    // =====================================================

    {
        id: "NTPC-REASON-001",
        exam: "RRB NTPC",
        subject: "Reasoning",
        chapter: "Number Series",
        question: "Find the next number: 3, 6, 12, 24, 48, ?",
        options: [
            "72",
            "84",
            "96",
            "108"
        ],
        answer: 2,
        explanation: "Each number is multiplied by 2. Therefore, 48 × 2 = 96.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-REASON-002",
        exam: "RRB NTPC",
        subject: "Reasoning",
        chapter: "Analogy",
        question: "Book : Reading :: Food : ?",
        options: [
            "Cooking",
            "Eating",
            "Buying",
            "Serving"
        ],
        answer: 1,
        explanation: "A book is associated with reading, while food is associated with eating.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-REASON-003",
        exam: "RRB NTPC",
        subject: "Reasoning",
        chapter: "Coding-Decoding",
        question: "If CAT is coded as DBU, then how will DOG be coded?",
        options: [
            "EPH",
            "EOG",
            "FPH",
            "DPE"
        ],
        answer: 0,
        explanation: "Each letter is moved one position forward in the alphabet. D becomes E, O becomes P and G becomes H. Therefore, DOG becomes EPH.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-REASON-004",
        exam: "RRB NTPC",
        subject: "Reasoning",
        chapter: "Blood Relation",
        question: "Pointing to a boy, Ravi said, 'He is the son of my mother's only son.' How is the boy related to Ravi?",
        options: [
            "Brother",
            "Nephew",
            "Son",
            "Cousin"
        ],
        answer: 2,
        explanation: "Ravi's mother's only son is Ravi himself. Therefore, the boy is Ravi's son.",
        difficulty: "Medium"
    },

    {
        id: "NTPC-REASON-005",
        exam: "RRB NTPC",
        subject: "Reasoning",
        chapter: "Odd One Out",
        question: "Select the number that does NOT belong to the group.",
        options: [
            "16",
            "25",
            "36",
            "48"
        ],
        answer: 3,
        explanation: "16, 25 and 36 are perfect squares. 48 is not a perfect square.",
        difficulty: "Easy"
    },


    // =====================================================
    // RRB NTPC - GENERAL AWARENESS
    // =====================================================

    {
        id: "NTPC-GA-001",
        exam: "RRB NTPC",
        subject: "General Awareness",
        chapter: "Indian Polity",
        question: "Who is known as the constitutional head of the Union of India?",
        options: [
            "Prime Minister",
            "President",
            "Chief Justice of India",
            "Home Minister"
        ],
        answer: 1,
        explanation: "The President of India is the constitutional head of the Union.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-GA-002",
        exam: "RRB NTPC",
        subject: "General Awareness",
        chapter: "Geography",
        question: "Which is the longest river in India?",
        options: [
            "Yamuna",
            "Godavari",
            "Ganga",
            "Narmada"
        ],
        answer: 2,
        explanation: "The Ganga is generally recognized as the longest river flowing within India.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-GA-003",
        exam: "RRB NTPC",
        subject: "General Awareness",
        chapter: "History",
        question: "Who founded the Maurya Empire?",
        options: [
            "Ashoka",
            "Chandragupta Maurya",
            "Bindusara",
            "Harshavardhana"
        ],
        answer: 1,
        explanation: "Chandragupta Maurya founded the Maurya Empire with the guidance of Chanakya.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-GA-004",
        exam: "RRB NTPC",
        subject: "General Awareness",
        chapter: "Indian Geography",
        question: "Which Indian state has the longest coastline?",
        options: [
            "Tamil Nadu",
            "Maharashtra",
            "Gujarat",
            "Andhra Pradesh"
        ],
        answer: 2,
        explanation: "Gujarat has the longest coastline among Indian states.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-GA-005",
        exam: "RRB NTPC",
        subject: "General Awareness",
        chapter: "Economy",
        question: "What is the full form of GDP?",
        options: [
            "Gross Domestic Product",
            "General Domestic Product",
            "Gross Development Product",
            "General Development Production"
        ],
        answer: 0,
        explanation: "GDP stands for Gross Domestic Product.",
        difficulty: "Easy"
    },


    // =====================================================
    // RRB NTPC - GENERAL SCIENCE
    // =====================================================

    {
        id: "NTPC-SCI-001",
        exam: "RRB NTPC",
        subject: "General Science",
        chapter: "Physics",
        question: "What is the SI unit of force?",
        options: [
            "Joule",
            "Newton",
            "Watt",
            "Pascal"
        ],
        answer: 1,
        explanation: "The SI unit of force is Newton (N).",
        difficulty: "Easy"
    },

    {
        id: "NTPC-SCI-002",
        exam: "RRB NTPC",
        subject: "General Science",
        chapter: "Chemistry",
        question: "What is the chemical formula of water?",
        options: [
            "CO2",
            "O2",
            "H2O",
            "H2O2"
        ],
        answer: 2,
        explanation: "Water consists of two hydrogen atoms and one oxygen atom. Therefore, its chemical formula is H2O.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-SCI-003",
        exam: "RRB NTPC",
        subject: "General Science",
        chapter: "Biology",
        question: "Which organ is primarily responsible for filtering waste from the blood?",
        options: [
            "Heart",
            "Lungs",
            "Kidneys",
            "Stomach"
        ],
        answer: 2,
        explanation: "The kidneys filter waste products and excess substances from the blood.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-SCI-004",
        exam: "RRB NTPC",
        subject: "General Science",
        chapter: "Physics",
        question: "Which instrument is used to measure electric current?",
        options: [
            "Voltmeter",
            "Ammeter",
            "Barometer",
            "Thermometer"
        ],
        answer: 1,
        explanation: "An ammeter is used to measure electric current in a circuit.",
        difficulty: "Easy"
    },

    {
        id: "NTPC-SCI-005",
        exam: "RRB NTPC",
        subject: "General Science",
        chapter: "Biology",
        question: "Which part of a plant carries out most photosynthesis?",
        options: [
            "Root",
            "Stem",
            "Leaf",
            "Flower"
        ],
        answer: 2,
        explanation: "Leaves contain chlorophyll and are the main site of photosynthesis.",
        difficulty: "Easy"
    }

];
