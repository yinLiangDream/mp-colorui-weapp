import { View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import {
  ClAnimation,
  ClCard,
  ClFlex,
  ClFloatButton,
  ClIcon,
  ClLayout,
  ClMenuList,
  ClSearchBar,
  ClTabBar,
  ClText,
  ClTimeline
} from 'mp-colorui';
import * as menu from '../../constant/menu.js';
import { updateList } from '../../model/index';
import './index.scss';

const allList = [].concat(
  menu.baseList,
  menu.actionList,
  menu.formList,
  menu.layoutList,
  menu.navigateList,
  menu.viewList
);
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'MP-ColorUI'
  };

  state = {
    active: 0,
    animate: '',
    show: false,
    tempfilter: []
  };

  componentWillMount() {}

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animate: 'scale-up',
        show: true
      });
    }, 200);
    if (
      Taro.getEnv() !== Taro.ENV_TYPE.WEB &&
      Taro.canIUse('getUpdateManager')
    ) {
      let updateManager = Taro.getUpdateManager();
      updateManager.onCheckForUpdate(res => {
        console.log(res);
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            Taro.showModal({
              title: '更新提示',
              content: '有新版本，是否重启应用？',
              success: ress => {
                if (ress.confirm) {
                  updateManager.applyUpdate();
                } else if (ress.cancel) {
                  return false;
                }
              }
            });
          });
          updateManager.onUpdateFailed(() => {
            Taro.hideLoading();
            Taro.showModal({
              title: '更新失败',
              content: '新版本更新失败，请检查网络',
              showCancel: false
            });
          });
        }
      });
    }
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { active, animate, tempfilter } = this.state;
    const icons = ['emoji', 'cascades', 'we', 'form', 'apps', 'taxi'];
    const tabs = [
      {
        icon: 'home',
        title: '主页',
        badge: false
      },
      {
        icon: 'magic',
        title: '更新',
        badge: false
      }
    ];
    const bgcolor = ['cyan', 'blue', 'pink', 'red', 'orange', 'yellow'];
    const weapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
    const cards = menu.default.map((item, index) => (
      <View
        key={item.key}
        onClick={() => {
          Taro.navigateTo({
            url: `/pages/${item.key}/index`
          });
        }}
      >
        <ClAnimation type={animate} delay={index / 10}>
          <ClCard bgColor={bgcolor[index]}>
            <View
              style={{
                backgroundImage:
                  'url(https://md-1255362963.cos.ap-chengdu.myqcloud.com/mpcolorui/home.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <ClFlex justify="between" align="center">
                <ClFlex align="center">
                  <ClIcon iconName={icons[index]} color="white" />
                  <ClLayout padding="small" paddingDirection="left">
                    <ClText size="large" textColor="white">
                      {item.name}
                    </ClText>
                    <ClText size="small" textColor="white">
                      {item.description}
                    </ClText>
                  </ClLayout>
                </ClFlex>
                <ClIcon iconName="roundrightfill" color="white" />
              </ClFlex>
            </View>
          </ClCard>
        </ClAnimation>
      </View>
    ));
    const update = (
      <ClLayout
        padding="xlarge"
        paddingDirection="bottom"
        margin="xlarge"
        marginDirection="bottom"
      >
        <ClCard type="full">
          <ClTimeline times={updateList} />
        </ClCard>
      </ClLayout>
    );
    return (
      <View className="index">
        {active === 0 ? (
          <ClLayout padding="xlarge" paddingDirection="vertical">
            <ClSearchBar
              shape="round"
              bgColor="gradualBlue"
              fix
              searchType="none"
              showResult
              result={tempfilter}
              onTouchResult={index => {
                Taro.navigateTo({
                  url: tempfilter[index].url
                });
              }}
              onInput={value => {
                this.setState({
                  tempfilter:
                    value !== ''
                      ? allList
                          .filter(item =>
                            item.name
                              .toLowerCase()
                              .includes(value.toLocaleLowerCase())
                          )
                          .map(item => ({
                            arrow: true,
                            title: item.name,
                            key: item.key,
                            url: `/pages/components/${item.key}/index`
                          }))
                      : []
                });
              }}
            />
          </ClLayout>
        ) : (
          ''
        )}
        {active === 0 ? (
          <ClLayout
            padding="xlarge"
            paddingDirection="bottom"
            margin="xlarge"
            marginDirection="bottom"
          >
            {cards}
          </ClLayout>
        ) : (
          ''
        )}
        {active === 1 ? update : ''}
        <ClTabBar
          tabs={tabs}
          fix
          active={active}
          onClick={index => {
            this.setState({
              active: index
            });
          }}
        />
        {weapp ? (
          <ClFloatButton
            open={false}
            icon="comment"
            size="large"
            bgColor="green"
            onClick={() => {
              Taro.navigateToMiniProgram({
                appId: 'wx8abaf00ee8c3202e',
                extraData: {
                  id: '74218'
                }
              });
            }}
          />
        ) : (
          ''
        )}
      </View>
    );
  }
}
