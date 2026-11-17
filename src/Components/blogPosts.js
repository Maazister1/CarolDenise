import img1 from '../assets/latest.jpg';
import img2 from '../assets/latest1.jpg';
import img3 from '../assets/latest2.jpg';
import img4 from '../assets/latest3.jpg';

// Blog posts. Starter posts are built from copy already on the site.
// To add a post: copy one object, give it a unique `slug`, and fill in the fields.
// `content` is a list of paragraphs; a string starting with "## " becomes a sub-heading.
const blogPosts = [
    {
        slug: 'a-message-for-anyone-feeling-alone',
        title: 'A Message for Anyone Feeling Alone',
        category: 'Messages From Mom',
        date: '2026',
        readTime: '3 min read',
        image: img2,
        excerpt: 'A short, heartfelt booklet for anyone carrying the weight of loneliness, and for everyone ready to help lift it.',
        content: [
            'Message FrOm Mom On Loneliness is Carol’s response to the US Surgeon General’s call to rebuild the social fabric of our nation.',
            'Written with a mother’s warmth, it speaks directly to those who feel unseen or disconnected, offering comfort, encouragement and practical ways to reach out and reconnect.',
            'Small enough to carry and share, it’s a reminder that no one has to face loneliness alone.',
            '## To those carrying the heavy cloak of loneliness',
            'Remember that YOU matter! And in the end, love wins!'
        ]
    },
    {
        slug: 'tools-for-your-toolbox',
        title: 'Tools for Your Toolbox',
        category: 'Resources',
        date: '2026',
        readTime: '4 min read',
        image: img1,
        excerpt: 'Incorporating tools and resources into daily life can provide quick access to support, especially when time is of the essence.',
        content: [
            'Equip yourself with tools and resources. Incorporating tools and resources into daily life can provide quick access to support, especially when time is of the essence.',
            '## Do your homework',
            'Find the resources that are helpful to you in your life and in your community. Plug important numbers into your phone. Be prepared.',
            '## It may not be you',
            'Remember, it may not be you who ends up in a potential crisis scenario. Your plan, quick thinking, and even your emergency kit could save the life of someone else: a neighbor, a friend, a loved one or even your beloved fur-baby.',
            '## Love is the most valuable tool',
            'LOVE WINS! That is the truth. If you cannot bring yourself to believe that yet, you can borrow my faith in love. Love is the MOST valuable tool in your toolbox. Keep that one close.'
        ],
        link: { label: 'See all resources', to: '/pages/resources' }
    },
    {
        slug: 'written-as-letters-read-as-inheritance',
        title: 'Written as Letters. Read as Inheritance.',
        category: 'The Family Matriarch',
        date: '2026',
        readTime: '2 min read',
        image: img3,
        excerpt: 'A work dedicated to the women holding families together, carrying the weight, the work, and the legacy.',
        content: [
            'The Family Matriarch: A Labor and A Legacy of Love centers around the topic of the family matriarch and the importance of that role.',
            'It is a personal take on the role of a woman in a family. The author, Carol, wrote this book as a love letter to her daughter, who she considers a matriarch-in-training.',
            'She hopes that her words will inspire not only her daughter but countless other matriarchs-in-training.'
        ],
        link: { label: 'Learn more about the book', to: '/books/the-family' }
    },
    {
        slug: 'superheroes-in-training',
        title: 'Superheroes in Training: So What Had Happened Was…',
        category: 'Young Men Series',
        date: '2026',
        readTime: '2 min read',
        image: img4,
        excerpt: 'A captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor.',
        content: [
            '“Superheroes in Training – So what had happened was…” is a captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor.',
            'In Part 1, short stories highlight the whimsical yet transformative impact of these encounters, altering the course of one’s journey.',
            '## Messages from Mom',
            'In Part 2, "Messages from Mom" delivers heartfelt wisdom from maternal figures, offering guidance and reassurance in a world filled with uncertainties. It addresses pressing issues like the loneliness epidemic and being mindful of vampires among us.'
        ],
        link: { label: 'Explore the series', to: '/books/superheroes' }
    }
];

export default blogPosts;
