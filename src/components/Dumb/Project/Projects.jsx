import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import withLoader from '../../HOC/withLoader';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    marginTop: 10,
    textAlign: 'center',
    maxWidth: 400,
    marginLeft: 5,
  },
};

function Projects(props) {
  if (props.projects) {
    return (
      <div style={styles.root}>
        {
          props.projects.map(p => (
            <Paper style={styles.card} key={p.id}>
              <Link to={`/projects/${p.id}`} style={{ color: 'inherit' }} >
                <ListItem button>
                  <div>
                    <h4>{p.name}</h4>
                    <p>{p.description}</p>
                  </div>
                </ListItem>
              </Link>
            </Paper>
          ))
        }
      </div>
    );
  }
  return null;
}

Projects.propTypes = {
  projects: PropTypes.array
};

export default withLoader(Projects);
