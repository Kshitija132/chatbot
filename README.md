Support Agent Chatbot for CDPs
This project creates an intelligent support agent chatbot designed to assist users with "how-to" questions about four major Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. By leveraging official documentation, the chatbot delivers relevant answers to guide users through tasks, configurations, and integrations. Additionally, it handles cross-CDP comparisons and provides advanced guidance.

Features
Cross-CDP Comparisons: Answer questions comparing features, workflows, and approaches between Segment, mParticle, Lytics, and Zeotap.
Advanced How-to Support: Provide step-by-step instructions for complex configurations, integrations, and tasks within each platform.
Robust NLP: The chatbot intelligently interprets various question phrasings, ensuring accurate and relevant responses to a wide range of queries.
Error Handling: Smart handling of irrelevant or out-of-scope queries (e.g., non-CDP-related questions) to keep the user experience smooth.
Comprehensive Platform Coverage: Answers queries on the functionalities and processes specific to Segment, mParticle, Lytics, and Zeotap.
Installation & Setup
Follow these steps to set up and run the chatbot locally.

1. Install Dependencies
Make sure Node.js and npm are installed on your machine. If not, please install them from the official Node.js website. Then, install the project dependencies:

bash
Copy
npm install
2. Run the Development Server
Start the development server using the following command:

bash
Copy
npm run dev
Once the server is running, open your browser and go to http://localhost:5173 to interact with the chatbot.

3. Build for Production
To prepare the application for production, run the build command:

bash
Copy
npm run build
4. Preview Production Build
If you'd like to preview the production version of the app locally:

bash
Copy
npm run preview
Usage
Once the server is running, visit http://localhost:5173 in your browser. You can now interact with the chatbot and ask questions like:

"How do I create an audience in Segment?"
"What are the differences between mParticle and Zeotap?"
"How do I integrate my website data with Lytics?"
"Can you help with advanced data configurations in Segment?"
The chatbot will provide tailored responses based on the official documentation of each platform.

Example Queries
How-to Questions:

"How do I create an audience in Segment?"
"How do I integrate mParticle with my app?"
Cross-CDP Comparison:

"What’s the difference between Segment and mParticle for data tracking?"
"How does Zeotap's segmentation compare to Lytics?"
Advanced Queries:

"Can you walk me through the steps for setting up a custom integration in Lytics?"
"What are the best practices for integrating Segment with Google Analytics?"
Additional Features
Cross-CDP Comparison: The chatbot can provide direct insights into differences between CDPs. For example, users can compare how audience creation works in Segment versus Lytics, or how data integrations are managed in mParticle versus Zeotap.

Advanced Guidance: The bot is capable of answering questions related to advanced configurations, integrations, and troubleshooting, catering to users with more in-depth knowledge of the platforms.

Flexible NLP: Whether users phrase their questions formally or casually, the chatbot is designed to understand and respond accurately, ensuring a smooth experience for all users.

Error Handling: If a user asks about something irrelevant (e.g., "What’s the weather like today?"), the chatbot will gracefully guide them back to relevant topics with a helpful message like, "I can only help with questions about CDPs."

Clone repository: https://github.com/Kshitija132/chatbot