# Set Up
## Environment
- Install **[Node.js](https://nodejs.org/en)**
- Text editor: VS Code (highly recommend), or others
## VS Code 
- Prettier
- React Code Snippets (or any other snippets for productivity)
- Autosave (in Settings)
- Format On Save (in Settings) + Prettier 
- GitHub Copilot 
- IntelliCode
- vscode-icons
## Project
1. Cloning project
```
git clone https://github.com/SJSUCSClub/acmsjsu-web.git
```
2. Install dependencies (otherwise code will not be compiled)
```
npm install
```
3. Create a **.env** file in **root** directory and  make sure the **.env** is in **.gitignore**. These are necessary variables for the project. **Disclosure**: please do not share 

4. Create a **MongoDB account** and send it to the Dev Team Lead to be added into our project database (Back-end Dev only)

# Code Management
1. Once finished developing, make sure you make a new branch for your commit
```
git branch workingbranch-yourname-task
git checkout workingbranch-yourname-task
```
2. Push code to the branch you made
```
git push --set-upstream origin workingbranch-yourname-task
```
3. Pull a PR to merge your branch with the working branch on GitHub
# Task Management
- Check you GitHub Project for tasks and details for task. Tasks are usually named as 
```
[workingbranch][admin/member] feature - #ofPeople position
```
- Check in with Project Manager for process weekly 
  
  Example: What have you done so far, are there any difficulties, is there any resources needed in order to finish the task, etc.
- Once you are done with the task, you can reach out to Dev Team Lead for another task or support other developers with their task depending on how much time left in the sprint