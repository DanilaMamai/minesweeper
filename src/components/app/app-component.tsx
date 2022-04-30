import React from 'react';
import { Card } from 'semantic-ui-react';

import styles from './app.module.css';

export const AppComponent = () => {
    return (
      <div className={styles.App}>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              TypeScript App
            </Card.Header>
            <Card.Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
}
