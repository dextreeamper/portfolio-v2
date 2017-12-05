import React, { Component } from 'react';
import projectOne from '../assets/img/project-one.jpg';
import projectTwo from '../assets/img/basin.jpg';
import projectThree from '../assets/img/houston.jpg';
import { Grid , Segment } from 'semantic-ui-react';

class ProjectItem extends Component {
  render() {
    return (
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
            </Grid.Row>
                        <Grid.Row>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>
                  <a href="#">
                    <img src={projectTwo} />
                    <h2>Project Title</h2>
                    <p className="description">The quick brown fox jumps over the lazy dog.</p>
                  </a>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    );
  }
}

export default ProjectItem;
