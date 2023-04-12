## Express Starter Pack
### Open the terminal 
Enter the following command one by one!!

```
git clone "https://github.com/sifytul/express-starterpack.git" <repo name>
cd <repo name>
yarn
git remote remove origin
```

## Remove .git file from the repository

```
// Windows powershell
Remove-Item -Recurse -Force .git

or
//inux or Mac
rm -rf .git/
```


## environment setup
### Add the database uri and other environment variable into the .env file like 
```
PORT=4000
MONGO_URI = Enter url here... (mongodb://localhost:27017)
```

## Then run the server
```
yarn dev
```
