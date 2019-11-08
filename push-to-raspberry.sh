IP="192.168.1.102"
TARGET_PATH="cli"

scp -r bin src package.json pi@$IP:$TARGET_PATH
