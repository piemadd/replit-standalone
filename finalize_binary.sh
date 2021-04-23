echo "Starting chmod"
cd replit-standalone-linux-x64
chmod +x replit-standalone
echo "Done with chmod"
echo "Adding to path"
export PATH=$PATH:$PWD/replit-standalone-linux-x64
echo "Added to path"