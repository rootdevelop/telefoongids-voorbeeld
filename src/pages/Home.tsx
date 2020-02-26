import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonListHeader, IonSearchbar } from '@ionic/react';
import React from 'react';
import './Home.css';

class Home extends React.Component {

  title: string = "De Telefoongids";

  render() {
    return (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{this.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{this.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonSearchbar placeholder="Zoek een collega"></IonSearchbar>
          <IonItem routerLink="/details/Henk Kelly">
            <IonAvatar slot="start">
              <img src="https://placekitten.com/400/400"></img>
            </IonAvatar>
            <IonLabel>
              <h2>Henk Kelly</h2>
              <h3>Top Developer</h3>
              <p>Team Interactieve Media</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/details/Nabil Ahami">
            <IonAvatar slot="start">
              <img src="https://placekitten.com/401/401"></img>
            </IonAvatar>
            <IonLabel>
              <h2>Nabil Ahami</h2>
              <h3>Another Top Developer</h3>
              <p>Team Interactieve Media</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/details/Steven van der Horst">
            <IonAvatar slot="start">
              <img src="https://placekitten.com/402/402"></img>
            </IonAvatar>
            <IonLabel>
              <h2>Steven van der Horst</h2>
              <h3>Soon to be developer</h3>
              <p>Team Interactieve Media</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
    )
  }

}

export default Home;
