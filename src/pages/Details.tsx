import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonBackButton, IonButtons, IonTitle, IonPage, IonContent } from '@ionic/react';

class Details extends React.Component {

    state = {
        name: ""
    }

    constructor(props: any) {
        super(props)

        this.state = {
            name: props.match.params.name
        }
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonBackButton color="dark" defaultHref="/" />
                        </IonButtons>
                        <IonTitle>{this.state.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                </IonContent>

            </IonPage>
        )
    }
}

export default Details;