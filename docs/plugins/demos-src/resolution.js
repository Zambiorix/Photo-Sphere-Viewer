const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

const viewer = new Viewer({
    container: 'viewer',
    caption: 'Parc national du Mercantour <b>&copy; Damien Sorel</b>',
    loadingImg: baseUrl + 'loader.gif',
    touchmoveTwoFingers: true,
    mousewheelCtrlKey: true,

    plugins: [
        SettingsPlugin,
        [ResolutionPlugin, {
            defaultResolution: 'SD',
            resolutions: [
                {
                    id: 'SD',
                    label: 'Small',
                    panorama: baseUrl + 'sphere-small.jpg',
                },
                {
                    id: 'HD',
                    label: 'Normal',
                    panorama: baseUrl + 'sphere.jpg',
                },
            ],
        }],
    ],
});