# Career Wave Academy Jind - Website

Hey there! 👋 This is the official website for **Career Wave Academy Jind**, an educational academy offering coaching for CBSE, IIT-JEE, NEET, and NDA preparation.

## 🌐 About the Website

This website showcases our academy's courses, facilities, and contact information. Students and parents can browse our offerings, learn about our teaching methods, and get in touch with us easily.

**What's on the website:**
- Course information (NEET, IIT-JEE, CBSE, NDA)
- Academy details and facilities
- Contact information and location
- Gallery and testimonials
- FAQ section
- Easy WhatsApp and phone contact options

## 🚀 How to Access the Website

The website is live and accessible at: **https://cwajind.in**

If you need to see what changes look like before they go live, you can run it locally on your computer (see below).

## 💻 Getting Started - Making Changes

### Option 1: Quick Edits on GitHub (Easiest for Simple Changes)

If you just need to change some text or contact info:

1. Go to the file you want to edit (like `src/components/Contact.tsx` for contact details)
2. Click the pencil icon (✏️) at the top right
3. Make your changes
4. Scroll down, write a quick message about what you changed
5. Click "Commit changes"

That's it! The changes will automatically deploy to the live website in a few minutes.

### Option 2: Work on Your Computer (For Bigger Changes)

If you want to see changes instantly and work on multiple files:

**First time setup:**

1. Make sure you have Node.js installed (version 18 or higher)
   - Check if you have it: Open terminal/command prompt and type `node --version`
   - If not installed, download from [nodejs.org](https://nodejs.org/)

2. Clone this repository to your computer:
   ```bash
   git clone https://github.com/your-username/careerwave.git
   cd careerwave
   ```

3. Install all the required packages:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` - you'll see the website running locally!

Now you can edit any file, save it, and see the changes instantly in your browser. Pretty cool, right?

**To stop the server:** Press `Ctrl + C` in the terminal

## 📝 Common Things You Might Want to Change

### Update Contact Information

- **Phone number:** Edit `src/lib/academy-info.ts` (line 30) and `src/components/Contact.tsx` (line 16, 24)
- **Email:** Edit `src/lib/academy-info.ts` (line 31) and `src/components/Contact.tsx` (line 32)
- **Address:** Edit `src/lib/academy-info.ts` (line 28-29) and `src/components/Contact.tsx` (line 140-142)

### Update Course Information

- Edit `src/components/Courses.tsx` - find the courses array and modify the details

### Update Academy Details

- Edit `src/lib/academy-info.ts` - this file contains all the main information about the academy

### Change Images

- Replace images in the `src/assets/` folder, OR
- Update the image paths in the component files

## 🛠️ What This Website is Built With

- **React** - For building the user interface
- **TypeScript** - For better code quality and fewer bugs
- **Vite** - Super fast development and building
- **Tailwind CSS** - For styling (makes it look good!)
- **shadcn/ui** - Beautiful, ready-to-use components

Don't worry if you don't know what these are - you can still make simple changes without understanding all the technical stuff!

## 🚢 How Changes Go Live

When you push changes to the main branch on GitHub, the website automatically rebuilds and updates. Usually takes 2-5 minutes. You'll see a green checkmark when it's done.

If something goes wrong, you can always revert to a previous version in GitHub.

## 📞 Need Help?

If you're stuck or something isn't working:

1. Check if Node.js is installed correctly
2. Make sure you ran `npm install` before starting
3. Try deleting the `node_modules` folder and running `npm install` again
4. Check the error messages in the terminal - they usually tell you what's wrong

## 📋 Quick Commands Reference

```bash
npm install          # Install all dependencies (do this first!)
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Check for code issues
```

---

**Note:** This website is set up to automatically deploy when you push changes to GitHub. So once you make changes and commit them, they'll go live automatically. Pretty convenient!

If you have any questions or run into issues, feel free to reach out. Good luck! 🎉
