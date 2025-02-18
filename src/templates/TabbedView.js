// @ts-check
import React from "react";
import { Route, Redirect } from "react-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonContent,
} from "@ionic/react";
import { toRoute } from "@/lib/routing";
import useConfigGroup from "@/hooks/useConfigGroup";
import AnimatedDiv from "@/common/AnimatedDiv";

/**
 * @typedef {Object} TabbedViewProps
 * @prop {string} section Config key for this section
 * @prop {string} route Route for the section
 * @prop {(data: Object) => React.ReactNode} render Sub-tab content render prop
 * @prop {string} sectionKey Config key that contains sub-route name and key identificator
 * @prop {string} titleKey Config key that contains name for the sub-view tab
 * @param {TabbedViewProps} props
 */
const TabbedView = ({
  section,
  route,
  render,
  sectionKey = "key",
  titleKey = "title",
  ...rest
}) => {
  // Get data from the config
  const [tabs, defaultTab] = useConfigGroup(section);

  if (!tabs) {
    // exit if no data available. This usually means that config is incomplete
    console.error(`${section} doesn't exist in config`, `Tab: ${titleKey} (${sectionKey})`);
    return null;
  }

  return (
    <IonContent {...rest}>
      <IonTabs>
        <IonRouterOutlet>
          {/* Render sub-routes */}
          {tabs.map(tab => (
            <Route
              path={`/${route}/:tab(${toRoute(tab[sectionKey])})`}
              render={() => render(tab)}
              key={tab[sectionKey]}
            />
          ))}
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {/* Render tabbed navigation */}
          {tabs.map(tab => (
            <IonTabButton
              tab={toRoute(tab[sectionKey])}
              href={`/${route}/${toRoute(tab[sectionKey])}`}
              key={tab[sectionKey]}
            >
              <AnimatedDiv
                animate={{
                  opacity: [0, 0, 1],
                  y: [100, 0],
                }}
                style={{
                  opacity: 0,
                }}
              >
                <IonLabel>{tab[titleKey]}</IonLabel>
              </AnimatedDiv>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
      {/* Navigate to the default tab */}
      <Route
        exact
        path={`/${route}`}
        render={() => <Redirect to={`/${route}/${toRoute(defaultTab[sectionKey])}`} />}
      />
    </IonContent>
  );
};
export default TabbedView;
