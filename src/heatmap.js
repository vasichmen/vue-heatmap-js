import { HeatmapConfig } from './config';
import { Heatmap } from './constructor';

export default function () {

// core
    return {
        create: function (config) {
            return new Heatmap(config);
        },
        register: function (pluginKey, plugin) {
            HeatmapConfig.plugins[pluginKey] = plugin;
        },
    };


}
