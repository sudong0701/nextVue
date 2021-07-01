import { App, Plugin }  from 'vue'

export const install = <T>(component: T, alias?: string) => {
	const comp = component as any;
	comp.install = (app: App) => {
		app.component(comp.name || comp.displayName, component);
		if (alias) {
			app.config.globalProperties[alias] = component;
		}
	};
	return component as T & Plugin;
};