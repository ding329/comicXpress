define('project2/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - adapters');
  test('adapters/application.js should pass jshint', function () {
    ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('project2/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function () {
    ok(true, 'app.js should pass jshint.');
  });
});
define('project2/tests/components/edit-cart.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/edit-cart.js should pass jshint', function () {
    ok(true, 'components/edit-cart.js should pass jshint.');
  });
});
define('project2/tests/components/monthly-order.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/monthly-order.js should pass jshint', function () {
    ok(true, 'components/monthly-order.js should pass jshint.');
  });
});
define('project2/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/nav-bar.js should pass jshint', function () {
    ok(true, 'components/nav-bar.js should pass jshint.');
  });
});
define('project2/tests/components/place-order.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - components');
  test('components/place-order.js should pass jshint', function () {
    ok(false, 'components/place-order.js should pass jshint.\ncomponents/place-order.js: line 11, col 45, Expected \'===\' and instead saw \'==\'.\n\n1 error');
  });
});
define('project2/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function () {
    ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('project2/tests/controllers/auth.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/auth.js should pass jshint', function () {
    ok(false, 'controllers/auth.js should pass jshint.\ncontrollers/auth.js: line 36, col 22, \'response\' is defined but never used.\n\n1 error');
  });
});
define('project2/tests/controllers/editcart.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/editcart.js should pass jshint', function () {
    ok(false, 'controllers/editcart.js should pass jshint.\ncontrollers/editcart.js: line 36, col 13, \'saveAs\' is not defined.\n\n1 error');
  });
});
define('project2/tests/controllers/monthlyorder.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/monthlyorder.js should pass jshint', function () {
    ok(true, 'controllers/monthlyorder.js should pass jshint.');
  });
});
define('project2/tests/controllers/order.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/order.js should pass jshint', function () {
    ok(false, 'controllers/order.js should pass jshint.\ncontrollers/order.js: line 75, col 57, Missing semicolon.\ncontrollers/order.js: line 87, col 26, Expected \'===\' and instead saw \'==\'.\ncontrollers/order.js: line 134, col 29, Expected \'===\' and instead saw \'==\'.\ncontrollers/order.js: line 180, col 32, Expected \'!==\' and instead saw \'!=\'.\ncontrollers/order.js: line 195, col 17, \'previewSel\' is defined but never used.\n\n5 errors');
  });
});
define('project2/tests/controllers/register.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - controllers');
  test('controllers/register.js should pass jshint', function () {
    ok(true, 'controllers/register.js should pass jshint.');
  });
});
define('project2/tests/helpers/resolver', ['exports', 'ember/resolver', 'project2/config/environment'], function (exports, _emberResolver, _project2ConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _project2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _project2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('project2/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function () {
    ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('project2/tests/helpers/start-app', ['exports', 'ember', 'project2/app', 'project2/router', 'project2/config/environment'], function (exports, _ember, _project2App, _project2Router, _project2ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application;

    var attributes = _ember['default'].merge({}, _project2ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _project2App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('project2/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function () {
    ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('project2/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = _ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    (0, _emberQunit.test)(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }
});
define('project2/tests/models/cart.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/cart.js should pass jshint', function () {
    ok(false, 'models/cart.js should pass jshint.\nmodels/cart.js: line 16, col 8, Confusing use of \'!\'.\n\n1 error');
  });
});
define('project2/tests/models/catalog.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/catalog.js should pass jshint', function () {
    ok(true, 'models/catalog.js should pass jshint.');
  });
});
define('project2/tests/models/monthlyorder.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/monthlyorder.js should pass jshint', function () {
    ok(true, 'models/monthlyorder.js should pass jshint.');
  });
});
define('project2/tests/models/previewselection.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/previewselection.js should pass jshint', function () {
    ok(true, 'models/previewselection.js should pass jshint.');
  });
});
define('project2/tests/models/registration.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - models');
  test('models/registration.js should pass jshint', function () {
    ok(true, 'models/registration.js should pass jshint.');
  });
});
define('project2/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function () {
    ok(true, 'router.js should pass jshint.');
  });
});
define('project2/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/application.js should pass jshint', function () {
    ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 30, col 40, Expected \'===\' and instead saw \'==\'.\nroutes/application.js: line 47, col 43, \'model\' is defined but never used.\n\n2 errors');
  });
});
define('project2/tests/routes/auth.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/auth.js should pass jshint', function () {
    ok(true, 'routes/auth.js should pass jshint.');
  });
});
define('project2/tests/routes/editcart.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/editcart.js should pass jshint', function () {
    ok(false, 'routes/editcart.js should pass jshint.\nroutes/editcart.js: line 9, col 43, \'model\' is defined but never used.\n\n1 error');
  });
});
define('project2/tests/routes/monthlyorder.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/monthlyorder.js should pass jshint', function () {
    ok(true, 'routes/monthlyorder.js should pass jshint.');
  });
});
define('project2/tests/routes/order.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/order.js should pass jshint', function () {
    ok(true, 'routes/order.js should pass jshint.');
  });
});
define('project2/tests/routes/register.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - routes');
  test('routes/register.js should pass jshint', function () {
    ok(true, 'routes/register.js should pass jshint.');
  });
});
define('project2/tests/test-helper', ['exports', 'project2/tests/helpers/resolver', 'ember-qunit'], function (exports, _project2TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_project2TestsHelpersResolver['default']);
});
define('project2/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function () {
    ok(true, 'test-helper.js should pass jshint.');
  });
});
define('project2/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('project2/tests/unit/adapters/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/adapters');
  test('unit/adapters/application-test.js should pass jshint', function () {
    ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('project2/tests/unit/components/edit-cart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('edit-cart', 'Unit | Component | edit cart', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('project2/tests/unit/components/edit-cart-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/edit-cart-test.js should pass jshint', function () {
    ok(true, 'unit/components/edit-cart-test.js should pass jshint.');
  });
});
define('project2/tests/unit/components/monthly-order-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('monthly-order', 'Unit | Component | monthly order', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('project2/tests/unit/components/monthly-order-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/monthly-order-test.js should pass jshint', function () {
    ok(true, 'unit/components/monthly-order-test.js should pass jshint.');
  });
});
define('project2/tests/unit/components/nav-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Unit | Component | nav bar', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('project2/tests/unit/components/nav-bar-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/nav-bar-test.js should pass jshint', function () {
    ok(true, 'unit/components/nav-bar-test.js should pass jshint.');
  });
});
define('project2/tests/unit/components/place-order-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('place-order', 'Unit | Component | place order', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
define('project2/tests/unit/components/place-order-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/components');
  test('unit/components/place-order-test.js should pass jshint', function () {
    ok(true, 'unit/components/place-order-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/application-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/auth-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/auth-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/editcart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:editcart', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/editcart-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/editcart-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/editcart-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/monthlyorder-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:monthlyorder', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/monthlyorder-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/monthlyorder-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/monthlyorder-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/order-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:order', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/order-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/order-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/order-test.js should pass jshint.');
  });
});
define('project2/tests/unit/controllers/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('project2/tests/unit/controllers/register-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/controllers');
  test('unit/controllers/register-test.js should pass jshint', function () {
    ok(true, 'unit/controllers/register-test.js should pass jshint.');
  });
});
define('project2/tests/unit/models/cart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('cart', 'Unit | Model | cart', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('project2/tests/unit/models/cart-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/cart-test.js should pass jshint', function () {
    ok(true, 'unit/models/cart-test.js should pass jshint.');
  });
});
define('project2/tests/unit/models/catalog-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('catalog', 'Unit | Model | catalog', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('project2/tests/unit/models/catalog-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/catalog-test.js should pass jshint', function () {
    ok(true, 'unit/models/catalog-test.js should pass jshint.');
  });
});
define('project2/tests/unit/models/monthlyorder-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('monthlyorder', 'Unit | Model | monthlyorder', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('project2/tests/unit/models/monthlyorder-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/monthlyorder-test.js should pass jshint', function () {
    ok(true, 'unit/models/monthlyorder-test.js should pass jshint.');
  });
});
define('project2/tests/unit/models/previewselection-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('previewselection', 'Unit | Model | previewselection', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('project2/tests/unit/models/previewselection-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/previewselection-test.js should pass jshint', function () {
    ok(true, 'unit/models/previewselection-test.js should pass jshint.');
  });
});
define('project2/tests/unit/models/registration-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('registration', 'Unit | Model | registration', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });
});
define('project2/tests/unit/models/registration-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/models');
  test('unit/models/registration-test.js should pass jshint', function () {
    ok(true, 'unit/models/registration-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/application-test.js should pass jshint', function () {
    ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:auth', 'Unit | Route | auth', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/auth-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/auth-test.js should pass jshint', function () {
    ok(true, 'unit/routes/auth-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/editcart-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:editcart', 'Unit | Route | editcart', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/editcart-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/editcart-test.js should pass jshint', function () {
    ok(true, 'unit/routes/editcart-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/monthlyorder-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:monthlyorder', 'Unit | Route | monthlyorder', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/monthlyorder-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/monthlyorder-test.js should pass jshint', function () {
    ok(true, 'unit/routes/monthlyorder-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/order-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:order', 'Unit | Route | order', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/order-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/order-test.js should pass jshint', function () {
    ok(true, 'unit/routes/order-test.js should pass jshint.');
  });
});
define('project2/tests/unit/routes/register-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:register', 'Unit | Route | register', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('project2/tests/unit/routes/register-test.jshint', ['exports'], function (exports) {
  'use strict';

  module('JSHint - unit/routes');
  test('unit/routes/register-test.js should pass jshint', function () {
    ok(true, 'unit/routes/register-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('project2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map