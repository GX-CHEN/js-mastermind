cd '/root/js-mastermind' || exit
git pull
npm install
npm run build
sudo cp -r build/ /var/www/html/
sudo service nginx reload