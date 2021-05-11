echo "Adding to path"
export PATH=$PATH:/home/runner/replit-standalone/node_modules/.bin
nativefier https://replit.com -n "Replit Standalone" -p windows --app-copyright 2021 --app-version 0.1.0 --build-version 2 -i "images/logo.ico" --min-width 800 --min-height 600 --internal-urls ".*?\.replit\.*?" --hide-window-frame --disable-context-menu
nativefier https://replit.com -n "replit-standalone" -p linux --app-copyright 2021 --app-version 0.1.0 --build-version 2 -i "images/logo.png" --min-width 800 --min-height 600 --internal-urls ".*?\.replit\.*?" --hide-window-frame --disable-context-menu
mv -r "Replit Standalone-win32-x64" "build/Replit Standalone-win32-x64"
mv -r "replit-standalone-linux-x64" "build/replit-standalone-linux-x64"
#rm -rf "Replit Standalone-win32-x64" "build/Replit Standalone-win32-x64"
#rm -rf "replit-standalone-linux-x64" "build/replit-standalone-linux-x64"
