// Libraries
import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  View,
  Dimensions
} from "react-native";
import { Spinner } from "native-base";

// Redux
import { connect } from "react-redux";
import { getAllLatestNewsFromSource } from "../../redux/actions/news-actions";

// Components
import { NewsFeedCard } from "./NewsFeedCard";

// Styling
import styles from "./styles";

/**
 * Gets the Latest News and displays them on a card-layout style.
 *
 * @class LatestNews
 * @extends {React.PureComponent}
 */
class LatestNews extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      width: Dimensions.get(`window`).width,
      height: Dimensions.get(`window`).height
    };
    this.handleOnRefresh = this.handleOnRefresh.bind(this);
    this.handleOnLayoutChange = this.handleOnLayoutChange.bind(this);
  }

  /**
   * @description Calls fetchLatestNews
   * @date 2018-07-23
   * @memberof LatestNews
   */
  componentDidMount() {
    this.fetchLatestNews(this.props.chosenSources);
  }

  // Gets the latest news from the newsapi source
  fetchLatestNews(sources) {
    if (sources) {
      let array = sources.items.map(source => source.key);
      let chosen = array.toString();
      this.props.dispatch(getAllLatestNewsFromSource(chosen));
      this.setState({
        isRefreshing: false
      });
    } else {
      return console.log("loading...");
    }
  }

  // Navigates into the clicked Article Detail
  onArticleDetailPress(article) {
    this.props.navigation.navigate(`ArticleDetailsScreen`, { ...article });
  }

  handleOnLayoutChange = event => {
    const { width, height } = Dimensions.get(`window`);
    this.setState({
      width,
      height
    });
  };

  // When the view is refresh (using pull down to refresh)
  handleOnRefresh() {
    this.setState({ isRefreshing: true });
    this.fetchLatestNews();
  }

  // Maps the data received to a list of cards
  renderArticleList(data) {
    const displayArticleList = data ? (
      data.map(article => (
        <TouchableOpacity
          style={[
            styles.card__anchor,
            {
              width: this.state.width,
              height: this.state.width * 0.75
            }
          ]}
          key={article.title}
          activeOpacity={0.75}
          onPress={() => this.onArticleDetailPress(article)}>
          <NewsFeedCard
            key={article.publishedAt}
            style={styles.card__item}
            author={article.author}
            title={article.title}
            url={article.url}
            image={article.urlToImage}
            published={article.publishedAt}
          />
        </TouchableOpacity>
      ))
    ) : (
      <Spinner color="#e5dfde" />
    );

    return <View style={styles.list}>{displayArticleList}</View>;
  }

  render() {
    const { latestNews } = this.props;
    const { isRefreshing } = this.state;

    console.log("chosen: ", this.props.chosenSources);

    return (
      <ScrollView
        onLayout={this.handleOnLayoutChange}
        contentContainerStyle={[
          styles.container,
          {
            width: this.state.width
          }
        ]}
        style={styles.scrollview}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.handleOnRefresh}
            tintColor="rgba(91,91,91,0.64)"
          />
        }
        scrollEnabled>
        {this.renderArticleList(latestNews)}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    chosenSources: state.preferences.sources,
    latestNews: state.news.latest.articles
  };
}

export default connect(mapStateToProps)(LatestNews);
