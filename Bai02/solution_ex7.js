const devices = [
    {
        id: "DEV_001",
        name: "Điều hòa",
        room: "Phòng khách",
        powerWatts: 1500,
        isActive: true
    },
    {
        id: "DEV_002",
        name: "Quạt",
        room: "Phòng ngủ",
        powerWatts: 60,
        isActive: false
    },
    {
        id: "DEV_003",
        name: "Đèn ngủ",
        room: "Phòng ngủ",
        powerWatts: 40,
        isActive: true
    }
];

const validateDevice = (device) => {

    if (device.name === undefined || device.name.trim() === "") {
        return false;
    }

    if (device.room === undefined || device.room.trim() === "") {
        return false;
    }

    if (device.powerWatts === undefined || device.powerWatts <= 0) {
        return false;
    }

    return true;
};

const generateDeviceId = (list) => {
    let number = list.length + 1;

    let id = "DEV_00" + number;

    return id;
};

const createDevice = (list, newDev) => {

    if (!validateDevice(newDev)) {
        console.log("Dữ liệu thiết bị không hợp lệ!");
        return false;
    }

    newDev.id = generateDeviceId(list);

    if (newDev.isActive === undefined) {
        newDev.isActive = false;
    }

    list.push(newDev);

    return true;
};

const readDevicesByRoom = (list, roomName) => {
    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (list[i].room === roomName) {
            result.push(list[i]);
        }
    }

    return result;
};

const findDeviceIndex = (list, id) => {

    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return i;
        }
    }

    return -1;
};

const updateDevice = (list, id, updateData) => {

    const index = findDeviceIndex(list, id);

    if (index === -1) {
        return false;
    }

    const device = list[index];

    if (updateData.name !== undefined) {
        device.name = updateData.name;
    }

    if (updateData.room !== undefined) {
        device.room = updateData.room;
    }

    if (updateData.powerWatts !== undefined) {
        device.powerWatts = updateData.powerWatts;
    }

    if (updateData.isActive !== undefined) {
        device.isActive = updateData.isActive;
    }

    return true;
};

const deleteDevice = (list, id) => {

    const index = findDeviceIndex(list, id);

    if (index === -1) {
        return false;
    }

    list.splice(index, 1);

    return true;
};

const printDevices = (list) => {

    for (let i = 0; i < list.length; i++) {
        console.log(
            list[i].id,
            "|",
            list[i].name,
            "|",
            list[i].room,
            "|",
            list[i].powerWatts + "W",
            "|",
            list[i].isActive ? "BẬT" : "TẮT"
        );
    }
};

console.log("===== DANH SÁCH BAN ĐẦU =====");
printDevices(devices);

console.log("\n===== CREATE =====");

const newDevice = {
    name: "Smart TV",
    room: "Phòng khách",
    powerWatts: 120,
    isActive: true
};

console.log("Kết quả thêm:", createDevice(devices, newDevice));

printDevices(devices);

console.log("\n===== READ PHÒNG NGỦ =====");

const bedroomDevices = readDevicesByRoom(
    devices,
    "Phòng ngủ"
);

printDevices(bedroomDevices);

console.log("\n===== UPDATE =====");
console.log(
    "Tắt DEV_001:",
    updateDevice(devices, "DEV_001", {
        isActive: false
    })
);

console.log(
    "Đưa DEV_003 về 0W:",
    updateDevice(devices, "DEV_003", {
        powerWatts: 0
    })
);

printDevices(devices);

console.log("\n===== UPDATE ID KHÔNG TỒN TẠI =====");

console.log(
    updateDevice(devices, "DEV_999", {
        isActive: false
    })
);

console.log("\n===== DELETE =====");

console.log(
    "Xóa DEV_002:",
    deleteDevice(devices, "DEV_002")
);

printDevices(devices);

console.log("\n===== DELETE ID KHÔNG TỒN TẠI =====");

console.log(
    "Xóa DEV_999:",
    deleteDevice(devices, "DEV_999")
);