import LanguageModel from '../model/language';
 
export default {
  async initialLanguage(req, res, next) {
    try {
      const languages = await LanguageModel.generateSupportLanguage()
      return res.status(201).json({
        data: languages
      })
    } catch(err) {
      return res.status(500).json(err)
    }
  },
  async getLanguages(req, res, next) {
    try {
      const languages = await LanguageModel.getAllLanguage()
      if (languages.length) {
        return res.status(200).json({
          data: languages[0]
        })
      }
      return res.status(200).json({
        data: []
      })
    } catch(err) {
      return res.status(500).json(err)
    }
  }
};
