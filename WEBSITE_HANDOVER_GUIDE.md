# CareerWave Website - Handover Guide

## Quick Questions They Will Ask (Prepare Your Answers)

### 🔐 **Access & Login Questions**

1. **Where is the code stored?**
   - Answer: GitHub/GitLab/Bitbucket URL: `_________________`
   - Repository name: `_________________`

2. **How do I get access to the code?**
   - Answer: I'll add you as collaborator. Your email: `_________________`
   - Or: Clone using this command: `git clone _________________`

3. **Where is the website hosted?**
   - Answer: Vercel/Netlify/Other: `_________________`
   - Login URL: `_________________`
   - Your email for access: `_________________`

4. **What's the domain name?**
   - Answer: `_________________`

5. **Where is the domain registered?**
   - Answer: GoDaddy/Namecheap/Cloudflare/Other: `_________________`
   - Login URL: `_________________`
   - Your email for access: `_________________`

---

### 💻 **Making Changes Questions**

6. **How do I edit text/content on the website?**
   - Answer: Edit files in `src/components/` folder. Main files:
     - Contact info: `src/components/Contact.tsx`
     - Academy details: `src/lib/academy-info.ts`
     - Course info: `src/components/Courses.tsx`

7. **How do I change phone number or email?**
   - Answer: Edit `src/lib/academy-info.ts` (line 30-31) and `src/components/Contact.tsx` (line 16, 24, 32)

8. **How do I change the address?**
   - Answer: Edit `src/lib/academy-info.ts` (line 28-29) and `src/components/Contact.tsx` (line 140-142)

9. **How do I add/remove courses?**
   - Answer: Edit `src/components/Courses.tsx` - find the courses array and add/remove items

10. **How do I change images?**
    - Answer: Replace images in `src/assets/` folder with same filename, OR update image paths in components

11. **How do I test changes before making them live?**
    - Answer: Run `npm run dev` locally to see changes, then push to GitHub. Changes auto-deploy.

12. **Do I need to know coding?**
    - Answer: Basic text editing is enough for simple changes. For complex changes, you may need help.

---

### 🚀 **Deployment Questions**

13. **How do changes go live?**
    - Answer: Push changes to GitHub → Automatic deployment happens (usually takes 2-5 minutes)

14. **What if the website breaks after my changes?**
    - Answer: Check Vercel/Netlify dashboard for errors, or revert the last commit in GitHub

15. **How do I see if deployment is successful?**
    - Answer: Check hosting dashboard (Vercel/Netlify) - green checkmark means success

---

### 🌐 **Domain Questions**

16. **How do I connect a new domain?**
    - Answer: Add domain in hosting dashboard (Vercel/Netlify), then update DNS records at domain registrar

17. **Where are DNS settings?**
    - Answer: At domain registrar (GoDaddy/Namecheap/etc.) → DNS Management section

18. **What DNS records are currently set?**
    - Answer: 
      - Type: `_________________` | Value: `_________________`
      - Type: `_________________` | Value: `_________________`

19. **How long do DNS changes take?**
    - Answer: Usually 5 minutes to 24 hours (most common: 1-2 hours)

---

### 📧 **Contact Form Questions**

20. **Where do contact form submissions go?**
    - Answer: Currently: `_________________` (Email/API endpoint/Other)
    - Or: Not set up yet - needs backend integration

21. **How do I change where form submissions go?**
    - Answer: Need to add backend service (Formspree/EmailJS/API) - requires code changes

---

### 🛠️ **Technical Setup Questions**

22. **What software do I need installed?**
    - Answer: 
      - Node.js (version 18 or higher)
      - Git
      - Code editor (VS Code recommended)

23. **How do I run the website on my computer?**
    - Answer: 
      ```bash
      git clone [repository-url]
      cd careerwave
      npm install
      npm run dev
      ```
      Then open: `http://localhost:5173`

24. **What if `npm install` gives errors?**
    - Answer: Make sure Node.js is installed. Try deleting `node_modules` folder and running `npm install` again

---

### 📱 **WhatsApp & Social Links**

25. **How do I change WhatsApp number?**
    - Answer: Edit `src/components/WhatsAppButton.tsx` (line 15) and `src/components/Contact.tsx` (line 24)

26. **How do I add social media links?**
    - Answer: Add links in Footer component: `src/components/Footer.tsx`

---

### 🎨 **Design & Styling Questions**

27. **How do I change colors?**
    - Answer: Edit `tailwind.config.ts` - find color definitions and change values

28. **How do I change fonts?**
    - Answer: Edit `tailwind.config.ts` or `src/index.css` - find font-family settings

29. **How do I add a new page?**
    - Answer: 
      1. Create new file in `src/pages/`
      2. Add route in `src/App.tsx`
      3. Add link in navigation (Header component)

---

### 🔍 **SEO & Analytics**

30. **Is Google Analytics set up?**
    - Answer: Yes/No - If yes, tracking ID: `_________________`

31. **How do I update meta tags (title, description)?**
    - Answer: Edit `index.html` in root folder - find `<title>` and `<meta>` tags

32. **How do I submit to Google Search Console?**
    - Answer: Go to Google Search Console → Add property → Verify ownership → Submit sitemap

---

### 📞 **Emergency Contacts**

33. **Who do I contact if something breaks?**
    - Answer: 
      - Technical support: `_________________`
      - Hosting support: Check Vercel/Netlify documentation
      - Domain support: Contact domain registrar

34. **What's the backup plan if website goes down?**
    - Answer: 
      - Previous version available in GitHub history
      - Can revert deployment in hosting dashboard
      - Backup location: `_________________`

---

### ✅ **Quick Checklist for You to Fill**

- [ ] GitHub repository URL: `_________________`
- [ ] Hosting platform: `_________________` | Login: `_________________`
- [ ] Domain registrar: `_________________` | Login: `_________________`
- [ ] Domain name: `_________________`
- [ ] Contact email for form: `_________________`
- [ ] Phone number: `_________________`
- [ ] WhatsApp number: `_________________`
- [ ] Google Analytics ID (if any): `_________________`
- [ ] Any API keys needed: `_________________`

---

## 📝 **Notes Section**

_Add any specific instructions or important notes here:_

```
_________________________________________________
_________________________________________________
_________________________________________________
```

---

**Last Updated:** `_________________`
**Handed Over To:** `_________________`
**Your Contact:** `_________________`

