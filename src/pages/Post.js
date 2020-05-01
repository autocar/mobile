import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Feather';
import SocialButtons from '../components/SocialButtons';
import ShareButton from '../components/ShareButton';
import Content from '../components/Content';
import Tag from '../components/Tag';

function Post() {
  return (
    <View style={styles.container}>
      <Header
        title="PHP Backend Developer"
        button={<ShareButton url="https://www.google.com/" />}
      />
      <ScrollView style={styles.container}>
        <View style={styles.company}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://kodilan.ams3.digitaloceanspaces.com/companies/piple.png',
            }}
          />
          <View style={styles.companyDetails}>
            <Text style={styles.companyName} numberOfLines={1}>
              Piple
            </Text>
            <Text style={styles.postTitle}>PHP Backend Developer</Text>
          </View>
        </View>
        <Content style={{width: '100%', marginVertical: 25}} />
        <View style={styles.card}>
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name="calendar" color="#26ae61" size={18} />
              <Text style={styles.itemHeaderText}>Son Güncelleme:</Text>
            </View>
            <Text style={styles.itemContent}>12 Mayıs 2020</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name="user" color="#26ae61" size={18} />
              <Text style={styles.itemHeaderText}>Pozisyon:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemContent}>
                Android Geliştirme Danışmanı
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name="map-pin" color="#26ae61" size={18} />
              <Text style={styles.itemHeaderText}>Lokasyon:</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.itemContent}>Remote</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name="bookmark" color="#26ae61" size={18} />
              <Text style={styles.itemHeaderText}>Etiketler:</Text>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.tags}>
                <Tag
                  name="android"
                  type="tag"
                  tagStyle={styles.tag}
                  tagTextStyle={styles.tagText}
                />
                <Tag
                  name="mobile"
                  type="tag"
                  tagStyle={styles.tag}
                  tagTextStyle={styles.tagText}
                />
                <Tag
                  name="and"
                  type="tag"
                  tagStyle={styles.tag}
                  tagTextStyle={styles.tagText}
                />
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name="share-2" color="#26ae61" size={18} />
              <Text style={styles.itemHeaderText}>Bağlantılar:</Text>
            </View>
            <View style={{flex: 1}}>
              <SocialButtons />
            </View>
          </View>
        </View>
        <View style={styles.applyButtons}>
          <TouchableOpacity activeOpacity={0.8} style={styles.applyButton}>
            <Icon name="mail" color="#FFF" size={20} />
            <Text style={styles.applyButtonText}>E-Posta ile Başvur</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={[styles.applyButton, {marginTop: 10}]}>
            <Icon name="link" color="#FFF" size={20} />
            <Text style={styles.applyButtonText}>Site Üzerinden Başvur</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  company: {
    backgroundColor: '#FFF',
    width: '100%',
    paddingHorizontal: '5%',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 48,
    height: 48,
  },
  companyDetails: {
    marginLeft: 25,
  },
  companyName: {
    color: '#333',
    fontSize: 17,
    marginBottom: 4,
  },
  postTitle: {
    color: '#555',
    fontSize: 14,
  },
  card: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  itemHeaderText: {
    color: '#1d9b54',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  itemContent: {
    color: '#333',
    fontSize: 14,
  },
  tags: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  tag: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    marginBottom: 0,
  },
  tagText: {
    fontSize: 13,
  },
  applyButtons:{
    paddingVertical: 30
  },
  applyButton: {
    backgroundColor: '#1d9b54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: '5%',
    borderRadius: 3
  },
  applyButtonText: {
    color: '#FFF',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Post;