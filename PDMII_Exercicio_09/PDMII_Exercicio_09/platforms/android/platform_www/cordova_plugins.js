cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-dialogs": "1.3.3",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-camera": "2.4.1",
    "cordova-sqlite-storage": "2.5.2"
};
// BOTTOM OF METADATA
});