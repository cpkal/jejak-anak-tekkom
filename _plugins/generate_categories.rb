# _plugins/generate_categories.rb
module Jekyll
    class CategoryPageGenerator < Generator
      safe true
  
      def generate(site)
        if site.layouts.key? 'category'
          site.categories.each do |category, posts|
            site.pages << CategoryPage.new(site, site.source, category)
          end
        end
      end
    end
  
    class CategoryPage < Page
      def initialize(site, base, category)
        @site = site
        @base = base
        @dir = File.join('category', category)
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'category.html')
        self.data['category'] = category
        self.data['title'] = "Posts in category '#{category}'"
      end
    end
  end
  