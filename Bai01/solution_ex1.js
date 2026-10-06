const devices = [
    {
        id: "DEV01",
        name: "Điều hòa phòng khách",
        isActive: true,
        powerWatts: 1500
    },
    {
        id: "DEV02",
        name: "Đèn ngủ",
        isActive: true,
        powerWatts: 40
    }
];

const findDeviceById = (devices, targetId) => {
    for (let i = 0; i < devices.length; i++) {
        if (devices[i].id === targetId) {
            return devices[i];
        }
    }

    return null;
};

const updateDevice = (devices, targetId, updatedData) => {
    const targetDevice = findDeviceById(devices, targetId);

    if (targetDevice === null) {
        return false;
    }
    if (updatedData.name !== undefined) {
        targetDevice.name = updatedData.name;
    }
    if (updatedData.isActive !== undefined) {
        targetDevice.isActive = updatedData.isActive;
    }
    if (updatedData.powerWatts !== undefined) {
        targetDevice.powerWatts = updatedData.powerWatts;
    }

    return true;
};

console.log("===== TRƯỚC KHI CẬP NHẬT =====");
console.log(devices);

updateDevice(devices, "DEV01", {
    isActive: false
});

updateDevice(devices, "DEV02", {
    powerWatts: 0
});


console.log("\n===== SAU KHI CẬP NHẬT =====");
console.log(devices);